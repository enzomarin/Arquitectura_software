#!/usr/bin/env python
import pika

#Conexión al servidor RabbitMQ
connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
channel = connection.channel()

#Creación de la cola
channel.queue_declare(queue='cola1')

#Publicación del mensaje
channel.basic_publish(exchange='',
                      routing_key='cola1',
                      body='Hello World!')

print(" [x] Sent 'Hello World!'")

connection.close()

