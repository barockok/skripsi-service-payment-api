export default {
  "merchant_service_url"             : process.env.merchant_service_url || "http://localhost:3000",
  "notification_service_url"         : process.env.notification_service_url || "http://localhost:9093",
  "communication_protocol"           : process.env.communication_protocol || "thrift",
  "merchant_service_thrift_host"     : process.env.merchant_service_thrift_host || "localhost",
  "notification_service_thrift_host" : process.env.notification_service_thrift_host || "localhost",
  "merchant_service_thrift_port"     : parseInt(process.env.merchant_service_thrift_port || 9090),
  "notification_service_thrift_port" : parseInt(process.env.notification_service_thrift_port || 9092)
}
