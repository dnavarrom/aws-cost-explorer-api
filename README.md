# aws-cost-explorer-api


Example for [aws-cost-explorer](https://github.com/dnavarrom/aws-cost-explorer) module

## Installation

```
git clone https://github.com/dnavarrom/aws-cost-explorer-api.git
cd aws-cost-explorer-api
npm install
```


## AWS Account Configuration


Edit AWS Account Key + Values in ./config/default.json file 


## Usage

`node app.js`

Open this url http://localhost:3000 in your web browser


### Response Data

```
{
	ResultsByTime: [{
		TimePeriod: {
			Start: '2017-11-01',
			End: '2017-11-30'
		},
		Total: {
			BlendedCost: {
				Amount: '4066.1336704447',
				Unit: 'USD'
			}
		},
		Groups: [],
		Estimated: false
	}],
    Total: {
        Amount: 4066, 
        Unit: 'USD'
    }
}
```
