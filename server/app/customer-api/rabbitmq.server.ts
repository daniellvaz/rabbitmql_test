import { Channel, connect, Connection, Message } from "amqplib";

export default class Rabbitmql {
  private conn?: Connection
  private channel?: Channel

  constructor(
    private uri: string, 
  ){}

  async start(): Promise<void> {
    this.conn = await connect(this.uri);
    this.channel = await this.conn.createChannel()
  }

  async publishInQueue(queue: string, message: string) {
    if(!this.channel) {
      throw new Error("Channel is not available");
    }

    return this.channel.sendToQueue(queue, Buffer.from(message))
  }

  async consume(queue: string, callback: (message: Message) => void) {
    
    if(!this.channel) {
      throw new Error("channel is not available")
    }

    return this.channel.consume(queue, (message) => {
      if(!message) {
        throw new Error("Message is not available")
      }

      callback(message);
      this.channel!.ack(message)
    })
  }
}