# Czech Names declension API

## Work in progress
*29-04-2020*: Nominative :white_check_mark:

## How does it work

- Use of Firebase Cloud Functions
- For demo go to `https://europe-west3-czech-declension.cloudfunctions.net/app/vocative?name={YOUR_NAME}`

### Examples: 
- https://europe-west3-czech-declension.cloudfunctions.net/app/vocative=Šimon
- https://europe-west3-czech-declension.cloudfunctions.net/app/vocative=Petrůšek
- https://europe-west3-czech-declension.cloudfunctions.net/app/vocative=Karel
- https://europe-west3-czech-declension.cloudfunctions.net/app/vocative=Anakin

## Local Dev notes
- For local dev you will need to change the version of `node` to `12` in `package.json`. Before deploying change the version back to `8`. *[29-05-2020]*
