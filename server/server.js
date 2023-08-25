const express = require('express');
const app = express();
//FashionData
const FashoionData = [
  {
    id: 1,
    image:
      'https://new.axilthemes.com/demo/react/papr/images/posts/post_21.jpg?imwidth=384',

    headline: 'Boxed Water Partners With Rag & Bone To Tap Consumer Creativity',

    description: 'Get Around Easily With A New York Limousine Service.',
    link: 'https://example.com/article1',
  },
  {
    id: 2,
    image:
      'https://new.axilthemes.com/demo/react/papr/images/posts/post_14.jpg',
    headline: 'To Keep Makeup Looking Fresh Take A Powder',

    description: 'Curabitur egestas est vitae sem blandit tincidunt. ',
    link: 'https://example.com/article2',
  },
];

//SportsmainData
const SportsmainData = [
  {
    id: 1,
    image:
      'https://new.axilthemes.com/demo/react/papr/images/posts/post_9.jpg?imwidth=640',

    headline: 'Boxed Water Partners With Rag & Bone To Tap Consumer Creativity',

    description: 'Get Around Easily With A New York Limousine Service.',
    link: 'https://example.com/article1',
  },
  {
    id: 2,
    image:
      'https://dims.apnews.com/dims4/default/ab431b2/2147483647/strip/true/crop/5349x3566+0+0/resize/1440x960!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fa7%2F3f%2Fa13496ee99ae783a56d479276ff1%2Fbbdec6628a9a4c07af70e289fd9feae4',
    headline:
      'Messi speaks publicly for 1st time since joining Inter Miami and says he’s happy with his choice',

    description: 'Curabitur egestas est vitae sem blandit tincidunt. ',
    link: 'https://example.com/article2',
  },
];

// LifestyleData
const LifestyleData = [
  {
    id: 1,
    image:
      'https://new.axilthemes.com/demo/react/papr/images/posts/post_5.jpg?imwidth=384',
    headline: 'Boxed Water Partners With Rag & Bone To Tap Consumer Creativity',

    description:
      'Curabitur egestas est vitae sem blandit tincidunt. Nunc cursus interdum odio sit amet gravida',
    link: 'https://example.com/article1',
  },
  {
    id: 2,
    image:
      'https://new.axilthemes.com/demo/react/papr/images/posts/post_15.jpg?imwidth=384',
    headline:
      'Gigi Gorgeous And Nats Getty Have A, Well, Gorgeous Beachside Wedding',

    description:
      'Curabitur egestas est vitae sem blandit tincidunt. Nunc cursus interdum odio sit amet gravida',
    link: 'https://example.com/article2',
  },
  {
    id: 3,
    image:
      'https://new.axilthemes.com/demo/react/papr/images/posts/post_4.jpg?imwidth=384',
    headline: 'Trip To Iqaluit In Nunavut A Canadian Arctic City',

    description:
      'Curabitur egestas est vitae sem blandit tincidunt. Nunc cursus interdum odio sit amet gravida',
    link: 'https://example.com/article2',
  },
];

// TechnologyData
const TechnologyData = [
  {
    id: 1,
    image:
      'https://new.axilthemes.com/demo/react/papr/images/posts/post_13.jpg?imwidth=384',
    headline: 'Stocking Your Restaurant Kitchen Finding Reliable Sellers',

    description: 'Messi speaks publicly for 1st time since joining .',
    link: 'https://example.com/article1',
  },
  {
    id: 2,
    image:
      'https://new.axilthemes.com/demo/react/papr/images/posts/post_23.jpg?imwidth=384',
    headline: 'Tesla’s Cooking Up A New Way To Wire Its Cars, Report Says',

    description: 'Get Around Easily With A New York Limousine Service.',
    link: 'https://example.com/article2',
  },
  // {
  //   id: 3,
  //   image:
  //     'https://new.axilthemes.com/demo/react/papr/images/posts/post_1.jpg?imwidth=1080',
  //   headline:
  //     'VR Is the Use of Computer Technology to Create a Simulated Environment.',

  //   description:
  //     'Curabitur egestas est vitae sem blandit tincidunt. Nunc cursus interdum odio sit amet gravida',
  //   link: 'https://example.com/article2',
  // },
];

// mockpostsData
const mockpostsData = {
  1: {
    title:
      'VR Is the Use of Computer Technology to Create a Simulated Environment.',
    image:
      'https://new.axilthemes.com/demo/react/papr/images/posts/post_1.jpg?imwidth=1080',

    content: `
      <h2>Get Around Easily With A New York Limousine Service</h2>
     
      <p>For those of us who want to say thank you to our moms, it’s not always easy to put those big feelings in words. Which is where Dribbble comes in.

      These eight shots crystallize the hard work moms put into keeping their kids alive, happy, and healthy. They might give you the inspiration you need for filling out that card—or stand alone for your mom’s interpretation.</p>

      <img src="https://new.axilthemes.com/demo/react/papr/images/post-single/post-single-img-1.jpg" />
      <p>For those of us who want to say thank you to our moms, it’s not always easy to put those big feelings in words. Which is where Dribbble comes in.

      These eight shots crystallize the hard work moms put into keeping their kids alive, happy, and healthy. They might give you the inspiration you need for filling out that card—or stand alone for your mom’s interpretation.</p>

    `,
  },

  2: {
    title:
      'Messi speaks publicly for 1st time since joining Inter Miami and says he’s happy with his choice',
    image:
      'https://new.axilthemes.com/demo/react/papr/images/posts/post_1.jpg?imwidth=1080',
    content: `
    
    <p>FORT LAUDERDALE, Fla. (AP) — Fans line up outside Inter Miami’s practice facility to watch Lionel Messi’s car drive away after training sessions. Players from opposing teams wait after matches to get his signature or just a simple handshake. His No. 10 jersey is everywhere in South Florida.</p>
    <p>For Messi, these are reminders that he made the right choice. He could have continued his acclaimed career with another stint in Barcelona, where he rose to stardom. He could have signed a lucrative deal to play for Al-Hilal in Saudi Arabia. He chose the unfamiliar — to travel stateside and play soccer in the United States, and he’s glad about it.</p>
    <img src="https://new.axilthemes.com/demo/react/papr/images/post-single/post-single-img-1.jpg" />
    <p>For those of us who want to say thank you to our moms, it’s not always easy to put those big feelings in words. Which is where Dribbble comes in.

    These eight shots crystallize the hard work moms put into keeping their kids alive, happy, and healthy. They might give you the inspiration you need for filling out that card—or stand alone for your mom’s interpretation.</p>

    `,
  },
  // Add more detail entries
};

// mockhomeNewsData
const mockhomeNewsData = [
  {
    id: 1,

    image:
      'https://new.axilthemes.com/demo/react/papr/images/posts/post_1.jpg?imwidth=1080',
    description:
      'VR Is the Use of Computer Technology to Create a Simulated Environment.',
    link: 'https://example.com/article1',
  },
  {
    id: 2,

    image:
      'https://new.axilthemes.com/demo/react/papr/images/posts/post_9.jpg?imwidth=640',
    description: 'Get Around Easily With A New York Limousine Service.',
    link: 'https://example.com/article2',
  },

  {
    id: 3,

    image:
      'https://new.axilthemes.com/demo/react/papr/images/posts/post_12.jpg?imwidth=384',
    description: 'Unmatched Toner Cartridge Quality 20 Less Than Oem Price',
    link: 'https://example.com/article2',
  },
  {
    id: 4,

    image:
      'https://new.axilthemes.com/demo/react/papr/images/posts/post_10.jpg?imwidth=640',
    description:
      'World Travel Holdings Will Be Honored Alongside Other Recipients',
    link: 'https://example.com/article2',
  },
];
// Mock news data
const mockNewsData = [
  {
    id: 1,
    headline: 'Example Headline 1',
    image:
      'https://dims.apnews.com/dims4/default/ab431b2/2147483647/strip/true/crop/5349x3566+0+0/resize/1440x960!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fa7%2F3f%2Fa13496ee99ae783a56d479276ff1%2Fbbdec6628a9a4c07af70e289fd9feae4',
    description: 'Messi speaks publicly for 1st time since joining .',
    link: 'https://example.com/article1',
  },
  {
    id: 2,
    headline: 'Example Headline 2',
    image:
      'https://new.axilthemes.com/demo/react/papr/images/posts/post_9.jpg?imwidth=640',
    description: 'Get Around Easily With A New York Limousine Service.',
    link: 'https://example.com/article2',
  },
];

const mockNewsDetails = {
  2: {
    title: 'Get Around Easily With A New York Limousine Service',
    image:
      'https://new.axilthemes.com/demo/react/papr/images/posts/post_9.jpg?imwidth=640',

    content: `
      <h2>Get Around Easily With A New York Limousine Service</h2>
      <img src="" />
      <p>For those of us who want to say thank you to our moms, it’s not always easy to put those big feelings in words. Which is where Dribbble comes in.

      These eight shots crystallize the hard work moms put into keeping their kids alive, happy, and healthy. They might give you the inspiration you need for filling out that card—or stand alone for your mom’s interpretation.</p>

      <img src="https://new.axilthemes.com/demo/react/papr/images/post-single/post-single-img-1.jpg" />
      <p>For those of us who want to say thank you to our moms, it’s not always easy to put those big feelings in words. Which is where Dribbble comes in.

      These eight shots crystallize the hard work moms put into keeping their kids alive, happy, and healthy. They might give you the inspiration you need for filling out that card—or stand alone for your mom’s interpretation.</p>

    `,
  },

  1: {
    title:
      'Messi speaks publicly for 1st time since joining Inter Miami and says he’s happy with his choice',
    image:
      'https://dims.apnews.com/dims4/default/ab431b2/2147483647/strip/true/crop/5349x3566+0+0/resize/1440x960!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fa7%2F3f%2Fa13496ee99ae783a56d479276ff1%2Fbbdec6628a9a4c07af70e289fd9feae4',
    content: `
    
    <p>FORT LAUDERDALE, Fla. (AP) — Fans line up outside Inter Miami’s practice facility to watch Lionel Messi’s car drive away after training sessions. Players from opposing teams wait after matches to get his signature or just a simple handshake. His No. 10 jersey is everywhere in South Florida.</p>
    <p>For Messi, these are reminders that he made the right choice. He could have continued his acclaimed career with another stint in Barcelona, where he rose to stardom. He could have signed a lucrative deal to play for Al-Hilal in Saudi Arabia. He chose the unfamiliar — to travel stateside and play soccer in the United States, and he’s glad about it.</p>
    <img src="https://new.axilthemes.com/demo/react/papr/images/post-single/post-single-img-1.jpg" />
    <p>For those of us who want to say thank you to our moms, it’s not always easy to put those big feelings in words. Which is where Dribbble comes in.

    These eight shots crystallize the hard work moms put into keeping their kids alive, happy, and healthy. They might give you the inspiration you need for filling out that card—or stand alone for your mom’s interpretation.</p>

    `,
  },
  // Add more detail entries
};

// const mockNewsDetails = {
//   1: {
//     id: 1,
//     title: 'Get Around Easily With A New York Limousine Service',
//     paragraphs: [
//       "For those of us who want to say thank you to our moms, it's not always easy to put those big feelings in words. Which is where Dribbble comes in.",
//       'These eight shots crystallize the hard work moms put into keeping their kids alive, happy, and healthy. They might give you the inspiration you need for filling out that card—or stand alone for your mom’s interpretation.',
//       // ... Add more paragraphs as needed
//     ],
//     image:
//       'https://new.axilthemes.com/demo/react/papr/images/posts/post_9.jpg?imwidth=640',
//     link: 'https://example.com/article1',
//   },
//   2: {
//     id: 2,
//     title: 'Consectetur adipiscing elit',
//     paragraphs: [
//       'Nulla facilisi. Ut rhoncus laoreet turpis, nec dignissim dui sollicitudin ac.',
//       // ... Add more paragraphs as needed
//     ],
//     image:
//       'https://new.axilthemes.com/demo/react/papr/images/posts/post_9.jpg?imwidth=640',
//     link: 'https://example.com/article2',
//   },
//   // Add more detail entries
// };

app.get('/fashion', (req, res) => {
  res.json({ FashoionData });
});

app.get('/sportsmain', (req, res) => {
  res.json({ SportsmainData });
});

app.get('/lifestyle', (req, res) => {
  res.json({ LifestyleData });
});

app.get('/technology', (req, res) => {
  res.json({ TechnologyData });
});

app.get('/home', (req, res) => {
  res.json({ mockhomeNewsData });
});

app.get('/api', (req, res) => {
  res.json({ mockNewsData });
});

//mockpostsData

app.get('/api/posts/:id/details', (req, res) => {
  const newsId = parseInt(req.params.id);
  const detailedContent = mockpostsData[newsId];

  if (!detailedContent) {
    res.status(404).json({ message: 'Detailed content not found' });
    return;
  }

  res.json(detailedContent);
});
// Your mockNewsDetails

app.get('/api/news/:id/details', (req, res) => {
  const newsId = parseInt(req.params.id);
  const detailedContent = mockNewsDetails[newsId];

  if (!detailedContent) {
    res.status(404).json({ message: 'Detailed content not found' });
    return;
  }

  res.json(detailedContent);
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
