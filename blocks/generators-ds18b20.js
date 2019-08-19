Blockly.JavaScript['ds18b20_init'] = function(block) {
  var number_pin = block.getFieldValue('pin');
  var code = `#EXTINC
#include <OneWire.h>
#include <DallasTemperature.h>
#END
#VARIABLE
OneWire oneWire_DS18B20(${number_pin}); 
DallasTemperature sensors_ds18b20(&oneWire_DS18B20);
#END
`;
  return code;
};

Blockly.JavaScript['ds18b20_get_devices_num'] = function(block) {
  var code = `sensors_ds18b20.getDS18Count()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['ds18b20_get_temperature'] = function(block) {
  var value_device = Blockly.JavaScript.valueToCode(block, 'device', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `sensors_ds18b20.getTemperatureC(${value_device})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['ds18b20_get_temperature_f'] = function(block) {
  var value_device = Blockly.JavaScript.valueToCode(block, 'device', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `sensors_ds18b20.getTemperatureF(${value_device})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['ds18b20_get_temperature_by_addr'] = function(block) {
  var value_device = Blockly.JavaScript.valueToCode(block, 'device', Blockly.JavaScript.ORDER_NONE);
  var code = `sensors_ds18b20.getTemperatureC(String(${value_device}))`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['ds18b20_get_temperature_f_by_addr'] = function(block) {
  var value_device = Blockly.JavaScript.valueToCode(block, 'device', Blockly.JavaScript.ORDER_NONE);
  var code = `sensors_ds18b20.getTemperatureC(String(${value_device}))`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['ds18b20_get_address_by_index'] = function(block) {
  var value_device = Blockly.JavaScript.valueToCode(block, 'device', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `sensors_ds18b20.getAddress(${value_device})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};