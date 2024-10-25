# Passport - Whitelabel POC

## Running the project

### 1. Install Dependencies
Install the dependencies
```bash
cd whitelabel-provider
npm install

cd ../whitelabelled-application 
npm install
```

### 2. Run the whitelabel-provider
```bash
cd whitelabel-provider
npm run dev
```

### 3. Start two instances of whitelabelled-application
```bash
npm run whitelabel3005
```

In a new Terminal window:
```bash
npm run whitelabel3008
```

### 4. Test the Whitelabels in your browser
- [WhiteLabel 3005](http://localhost:3005)
- [WhiteLabel 3008](http://localhost:3008)