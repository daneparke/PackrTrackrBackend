exports.seed = function (knex, Promise) {
  return knex('hostels').del()
    .then(function () {
      return knex('hostels').insert([
        {
          name: "Galvanize",
          latitude: 39.757580,
          longitude: -105.006847,
          image: 'http://www.rrengineers.com/wp-content/uploads/Galvanize-2-street-view-450x300.jpg'
        },
        {
          name: "Pivotal",
          latitude: 39.757731,
          longitude: -105.007119,
          image: 'http://www.rrengineers.com/wp-content/uploads/Galvanize-2-street-view-450x300.jpg'
        },
        {
          name: "Denver Beer",
          latitude: 39.758209,
          longitude: -105.007390,
          image: 'http://denverbeerco.com/wp-content/uploads/2014/10/taproom2.jpg'
        },
        {
          name: "Kindness Yoga",
          latitude: 39.757131,
          longitude: -105.008683,
          image: 'https://s3-media3.fl.yelpcdn.com/bphoto/qxeEBR8gEoe_jszTMGqqSA/ls.jpg'
        },
        {
          name: "Maria Empanada",
          latitude: 39.758499,
          longitude: -105.006510,
          image: 'https://businessden.com/wp-content/uploads/2016/03/mariaempanada_headshot.jpg'
        },
        {
          name: "Hostel Fish",
          latitude: 39.752611,
          longitude: -104.991992,
          image: 'https://media-cdn.tripadvisor.com/media/photo-p/08/6a/6b/80/hostel-fish.jpg'
        },
        {
          name: "Ember Hostel",
          latitude: 39.730046,
          longitude: -104.983860,
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/10/c6/f6/09/admire-the-historic-foursquare.jpg'
        },
        {
          name: "Dane's World",
          latitude: 39.747175,
          longitude: -104.992590,
          image: 'https://s3-media2.fl.yelpcdn.com/bphoto/8HTiLshzcnyZW5kUgZrTbg/ls.jpg'
        },

      ]);
    });
};