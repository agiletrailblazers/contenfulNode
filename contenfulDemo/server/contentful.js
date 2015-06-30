var contentful = Meteor.npmRequire('contentful');
var client = contentful.createClient({
  // ID of Space
  space: 'qtz4mu7wl0lv',
  // A valid access token within the Space
  accessToken: '846bd77d1da6e623460444c57c7b0846f8ea57df7ab6c1abb2533d76ba87e2ac',
  // Enable or disable SSL. Enabled by default.
  secure: true
});

var log = console.log.bind(console); // wat

// Get Space
client.space().then(log, log);

// Get all Entries
client.entries().then(log, log);
