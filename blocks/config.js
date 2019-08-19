module.exports = [
	{
		name : "Temperature Sensor (DS18B20)",
		blocks : [
			"ds18b20_init",
            "ds18b20_get_devices_num",
            {
                xml:
                   `<block type="ds18b20_get_temperature">
                        <value name="device">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
            },
            {
                xml:
                   `<block type="ds18b20_get_temperature_f">
                        <value name="device">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
            },
            "ds18b20_get_temperature_by_addr",
            "ds18b20_get_temperature_f_by_addr",
            {
                xml:
                   `<block type="ds18b20_get_address_by_index">
                        <value name="device">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
            }
		]
	}	
];