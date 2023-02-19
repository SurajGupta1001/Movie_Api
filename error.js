/*

 this.$__.validationError = new ValidationError(this);
                               ^

ValidationError: Movie validation failed: videos.0: Cast to [string] failed for value "[\n' +
  '  {\n' +
  "    key: 'Hello',\n" +
  "    name: 'Hello',\n" +
  "    site: 'Hello',\n" +
  '    size: 12,\n' +
  "    type: 'Hello'\n" +
  '  }\n' +
  ']" (type string) at path "videos.0" because of "CastError"
    at Document.invalidate (C:\Users\vikas\Desktop\Movie_Api\node_modules\mongoose\lib\document.js:3125:32)
    at model.$set (C:\Users\vikas\Desktop\Movie_Api\node_modules\mongoose\lib\document.js:1465:12)
    at model.$set (C:\Users\vikas\Desktop\Movie_Api\node_modules\mongoose\lib\document.js:1148:16)
    at model.Document (C:\Users\vikas\Desktop\Movie_Api\node_modules\mongoose\lib\document.js:166:12)
    at model.Model (C:\Users\vikas\Desktop\Movie_Api\node_modules\mongoose\lib\model.js:122:12)
    at new model (C:\Users\vikas\Desktop\Movie_Api\node_modules\mongoose\lib\model.js:5092:15)
    at C:\Users\vikas\Desktop\Movie_Api\node_modules\mongoose\lib\model.js:3197:22
    at C:\Users\vikas\Desktop\Movie_Api\node_modules\mongoose\lib\model.js:3232:7
    at Array.forEach (<anonymous>)
    at C:\Users\vikas\Desktop\Movie_Api\node_modules\mongoose\lib\model.js:3231:15 {
  errors: {
    'videos.0': CastError: Cast to [string] failed for value "[\n' +
      '  {\n' +
      "    key: 'Hello',\n" +
      "    name: 'Hello',\n" +
      "    site: 'Hello',\n" +
      '    size: 12,\n' +
      "    type: 'Hello'\n" +
      '  }\n' +
      ']" (type string) at path "videos.0" because of "CastError"
        at SchemaArray.cast (C:\Users\vikas\Desktop\Movie_Api\node_modules\mongoose\lib\schema\array.js:389:15)
        at SchemaType.applySetters (C:\Users\vikas\Desktop\Movie_Api\node_modules\mongoose\lib\schematype.js:1201:12)
        at model.$set (C:\Users\vikas\Desktop\Movie_Api\node_modules\mongoose\lib\document.js:1423:22)
        at model.$set (C:\Users\vikas\Desktop\Movie_Api\node_modules\mongoose\lib\document.js:1148:16)
        at model.Document (C:\Users\vikas\Desktop\Movie_Api\node_modules\mongoose\lib\document.js:166:12)
        at model.Model (C:\Users\vikas\Desktop\Movie_Api\node_modules\mongoose\lib\model.js:122:12)
        at new model (C:\Users\vikas\Desktop\Movie_Api\node_modules\mongoose\lib\model.js:5092:15)
        at C:\Users\vikas\Desktop\Movie_Api\node_modules\mongoose\lib\model.js:3197:22
        at C:\Users\vikas\Desktop\Movie_Api\node_modules\mongoose\lib\model.js:3232:7
        at Array.forEach (<anonymous>) {
      stringValue: `"[\\n' +\n` +
        "  '  {\\n' +\n" +
        `  "    key: 'Hello',\\n" +\n` +
        `  "    name: 'Hello',\\n" +\n` +
        `  "    site: 'Hello',\\n" +\n` +
        "  '    size: 12,\\n' +\n" +
        `  "    type: 'Hello'\\n" +\n` +
        "  '  }\\n' +\n" +
        `  ']"`,
      messageFormat: undefined,
      kind: '[string]',
      value: '[\n' +
        '  {\n' +
        "    key: 'Hello',\n" +
        "    name: 'Hello',\n" +
        "    site: 'Hello',\n" +
        '    size: 12,\n' +
        "    type: 'Hello'\n" +
        '  }\n' +
        ']',
      path: 'videos.0',
      reason: CastError: Cast to string failed for value "{ key: 'Hello', name: 'Hello', site: 'Hello', size: 12, type: 'Hello' }" (type Object) at path "videos"
          at SchemaString.cast (C:\Users\vikas\Desktop\Movie_Api\node_modules\mongoose\lib\schema\string.js:603:11)
          at SchemaType.applySetters (C:\Users\vikas\Desktop\Movie_Api\node_modules\mongoose\lib\schematype.js:1201:12)
          at SchemaArray.cast (C:\Users\vikas\Desktop\Movie_Api\node_modules\mongoose\lib\schema\array.js:385:32)
          at SchemaType.applySetters (C:\Users\vikas\Desktop\Movie_Api\node_modules\mongoose\lib\schematype.js:1201:12)
          at model.$set (C:\Users\vikas\Desktop\Movie_Api\node_modules\mongoose\lib\document.js:1423:22)
          at model.$set (C:\Users\vikas\Desktop\Movie_Api\node_modules\mongoose\lib\document.js:1148:16)
          at model.Document (C:\Users\vikas\Desktop\Movie_Api\node_modules\mongoose\lib\document.js:166:12)
          at model.Model (C:\Users\vikas\Desktop\Movie_Api\node_modules\mongoose\lib\model.js:122:12)
          at new model (C:\Users\vikas\Desktop\Movie_Api\node_modules\mongoose\lib\model.js:5092:15)
          at C:\Users\vikas\Desktop\Movie_Api\node_modules\mongoose\lib\model.js:3197:22 {
        stringValue: `"{ key: 'Hello', name: 'Hello', site: 'Hello', size: 12, type: 'Hello' }"`,
        messageFormat: undefined,
        kind: 'string',
        value: {
          key: 'Hello',
*/