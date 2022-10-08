# Typescript data types for OCPP

### OCPP versions supported:

- **2.0.1**

### Usage:

// Example using the MeterValueType in one of the types in my app

    import MeterValueType from "ocpp-messages-ts/TransactionEventRequest"

    type MyTransactionType = {
        DeviceId                 :string;
        EnergyTransferInProgress :bool;
        EnergyTransferStarted    :string;
        EnergyTransferStopped    :string;
        MeterValues              :MeterValueType[];
    };
