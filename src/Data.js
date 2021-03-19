// data used to display cart

const data = [
  {
    isbn: [
      { number: "9780310286707-1", available: "Available" },
      { number: "9780310286707-2", available: "Unavailable" },
    ],
    cover_url:
      "https://coverart.oclc.org/ImageWebSvc/oclc/+-+763994189_140.jpg?SearchOrder=+-+OT,OS,TN,GO,FA",
    title: "Systematic Theology: An Introduction to Biblical Doctrine",
    series: "None",
    author: ["Wayne Grudem"],
    subject: ["Theology", "Doctrinal"],
    publish_name: "Zondervan",
    publish_year: "2000",
    summary:
      "Written...for every Christian who has a hunger to know the central doctrines of the Bible in greater depth. An introduction to Biblical Doctrine...with the following six distinctive features: 1) A Clear Biblical Basis for Doctrines 2) Clarity in the Explanation of Doctrines 3) Application to Life 4) Focus on the Evangelical World 5) Hope for Progress in Doctrinal Unity in the Church 6) A Sense of the Urgent Need for Greater Doctrinal Understanding in the Whole Church",
    type: "dvd",
    rating: {
      amazon: "4.7",
      mcc: "0",
    },
    call_number: "None",
    hold: 0,
  },
  {
    isbn: [
      { number: "9780801071249-1", available: "Available" },
      { number: "9780801071249-2", available: "Available" },
    ],
    author: ["John Piper"],
    subject: ["Glory of God", "Providence and Government of God"],
    call_number: "None",
    rating: {
      amazon: "4.8",
      mcc: "0",
    },
    type: "book",
    cover_url: "https://pictures.abebooks.com/isbn/9780801071249-us.jpg",
    title: "Let the Nations Be Glad!",
    series: "None",
    publish_name: "Baker Books",
    publish_year: "2000",
    summary:
      'In this sequel to "The Supremacy of God in Preaching" John Piper draws on key biblical texts to show that worship is the ultimate goal of the church, and that proper worship fuels missions. The author addresses the role of prayer, universalism and annihilationism, the incentives of sovereign grace for world evangelization, and the task of reaching unreached peoples. Let the Nations Be Glad! will help students of missions reflect on the relationship between church and mission and on the role of every Christian in going out to all the world.',
    hold: 0,
  },
  {
    isbn: [
      {
        number: "None",
        available: "Unavailable",
      },
    ],
    author: ["Clarence Larkin"],
    subject: [
      "Bible-History",
      "Bible-Prophecies",
      "Dispensationalism",
      "Charts - 20th Century",
    ],
    call_number: "None",
    rating: {
      amazon: "4.4",
      mcc: "0",
    },
    type: "book",
    cover_url:
      "http://cdm.llu.edu/utils/getthumbnail/collection/p17224coll6/id/114",
    title: "Dispensational Truth",
    series: "None",
    publish_name: "Rev. Clarence Larkin Est.",
    publish_year: "1920",
    summary:
      'The Bible is not a systematic treatise on Theology, or Morals, or History, or Science, or any other topic. It is a REVELATION of God, of the fall of Man, the Way of Salvation, and of God\'s "Plan and purpose in the Ages." It treats of: 1. Four Persons-God the Father, God the Son, God the Holy Spirit, and Satan. 2. Three Places-Heaven, Earth and Hell. 3. Three Classes of People-The Jew, the Gentile, and the Church of God.',
    hold: 2,
  },
  {
    isbn: [
      {
        number: "9780830816507",
        available: "Unavailable",
      },
    ],
    author: ["J.I. Packer"],
    subject: ["God-Christianity"],
    call_number: "None",
    rating: {
      amazon: "4.8",
      mcc: "0",
    },
    type: "book",
    cover_url:
      "https://pics.cdn.librarything.com/picsizes/40/10/40103527e7fa5b05934625a5451444341514141.jpg",
    title: "Knowing God",
    series: "None",
    publish_name: "Inter-Varsity Press",
    publish_year: "1993",
    summary:
      "Knowing God is one of the most significant and popular Christian books of our time and has deepened the faith and understanding of millions of people around the world",
    hold: 1,
  },
  {
    isbn: [
      {
        number: "9780866051149",
        available: "Available",
      },
    ],
    author: ["Josh McDowell", "Bart Larson"],
    subject: ["Jesus Christ-Divinity"],
    call_number: "None",
    rating: {
      amazon: "4.7",
      mcc: "0",
    },
    type: "dvd",
    cover_url:
      "https://images-na.ssl-images-amazon.com/images/I/41xV6yNbgDL._BO1,204,203,200_.jpg",
    title: "Jesus: A Biblical Defense of His Diety",
    series: "None",
    publish_name: "HERE'S LIFE PUBLISHER",
    publish_year: "1983",
    summary:
      "History is filled with men who have claimed they came from God, that they were God, or that they bore messages from God. Buddha, Muhammad, Socrates, Confucius, Lao-tze and thousands of others right down to the present day have all made their claims. Yet in all of history, only One could prove that He came from God; that He was God; and as God He bore messages from God",
    hold: 3,
  },
  {
    isbn: [
      {
        number: "9780882077048",
        available: "Unavailable",
      },
    ],
    author: ["Dave Breese"],
    subject: ["Sects", "Cults", "Christian Sects"],
    call_number: "None",
    rating: {
      amazon: "4.8",
      mcc: "0",
    },
    type: "book",
    cover_url: "https://pictures.abebooks.com/isbn/9780882077048-us.jpg",
    title: "Know the Marks of Cults",
    series: "None",
    publish_name: "Victor Books",
    publish_year: "1975",
    summary:
      "How to cope with the cults? There are so many of them, all different. Who has time to study all their weird doctrines in order to refute them? Here is a better way. No need to get bogged down in the details. No need to debate fine points in the original Greek and Hebrew. No need to fight over the interpretation of obscure passages of Scripture. Each cult is guilty of one or more certain characteristic doctrinal errors. Once you know what these typical errors are, you can know what's basically wrong with a cult, whatever weird or seemingly rational form it may take.",
    hold: 0,
  },
];

export default data;
