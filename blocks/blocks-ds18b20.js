Blockly.Blocks['ds18b20_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("DS18B20 Init pin")
        .appendField(new Blockly.FieldNumber(0, 0, 255), "pin");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 this.setTooltip("init DS18B20");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ds18b20_get_devices_num'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("DS18B20 get number of devices");
    this.setOutput(true, ["int", "Number"]);
    this.setColour(30);
 this.setTooltip("get number of connected devices.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ds18b20_get_temperature'] = {
  init: function() {
    this.appendValueInput("device")
        .setCheck("Number")
        .appendField("DS18B20 get temperature (C) of device");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
    this.setColour(30);
 this.setTooltip("get temperature of device index N");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ds18b20_get_temperature_f'] = {
  init: function() {
    this.appendValueInput("device")
        .setCheck("Number")
        .appendField("DS18B20 get temperature (F) of device");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
    this.setColour(30);
 this.setTooltip("get temperature of device index N");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ds18b20_get_temperature_by_addr'] = {
  init: function() {
    this.appendValueInput("device")
        .setCheck("String")
        .appendField("DS18B20 get temperature (C) of device address");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
    this.setColour(30);
 this.setTooltip("get temperature by device serial");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ds18b20_get_temperature_f_by_addr'] = {
  init: function() {
    this.appendValueInput("device")
        .setCheck("String")
        .appendField("DS18B20 get temperature (F) of device address");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
    this.setColour(30);
 this.setTooltip("get temperature by device serial");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ds18b20_get_address_by_index'] = {
  init: function() {
    this.appendValueInput("device")
        .setCheck("Number")
        .appendField("DS18B20 get address of device");
    this.setInputsInline(true);
    this.setOutput(true,"String");
    this.setColour(30);
 this.setTooltip("get device address by given index");
 this.setHelpUrl("");
  }
};