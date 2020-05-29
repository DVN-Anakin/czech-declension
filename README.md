# Czech Names declension API

## Work in progress
*29-05-2020*: Vocative :white_check_mark:

## How does it work

- Use of Firebase Cloud Functions
- For demo go to `https://europe-west3-czech-declension.cloudfunctions.net/app/vocative?name={YOUR_NAME}`

### Examples: 
- https://europe-west3-czech-declension.cloudfunctions.net/app/vocative?name=Šimon
- https://europe-west3-czech-declension.cloudfunctions.net/app/vocative?name=Petrůšek
- https://europe-west3-czech-declension.cloudfunctions.net/app/vocative?name=Karel
- https://europe-west3-czech-declension.cloudfunctions.net/app/vocative?name=Anakin
- https://europe-west3-czech-declension.cloudfunctions.net/app/vocative?name=Buřtík

## Local Dev notes
- For local dev you will need to change the version of `node` to `12` in `package.json`. Before deploying to Firebase, change the `node ` version back to `8`. *[29-05-2020]*
