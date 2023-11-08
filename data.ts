import { FieldValues, Subscription } from './types';

export const Fields: FieldValues[] = [
   {
      id: 1,
      value: 'Social Emotional',
      subvalue: [
         { value: '', name: 'Manages Feelings' },
         { value: '', name: 'Follows limits and expectations' },
         { value: '', name: 'Takes care of own needs appropriately' },
         { value: '', name: 'Forms relationshipts with adults' },
         { value: '', name: 'Responds to emotianal cues' },
         { value: '', name: 'Interacts with peers' },
         { value: '', name: 'Makes friends' },
         { value: '', name: 'Balances needs and rights to self and others' },
         {
            value: '',
            name: 'Solves social problems'
         }
      ]
   },
   {
      id: 2,
      value: 'Language',
      subvalue: [
         { value: '', name: 'Comprehends language' },
         { value: '', name: 'Follows directions' },
         { value: '', name: 'Uses an expanding expressive vocabulary' },
         { value: '', name: 'Speaks clearly' },
         { value: '', name: 'Uses conventionial grammar' },
         { value: '', name: 'Tells about another time or place' },
         { value: '', name: 'Engages in conversation' },
         { value: '', name: 'Uses social rules of language' }
      ]
   },
   {
      id: 3,
      value: 'Cognitive',
      subvalue: [
         {
            value: '',
            name: 'Attends and engages'
         },
         { value: '', name: 'Persists' },
         { value: '', name: 'Solves problems' },
         { value: '', name: 'Shows curiosity and motivation' },
         { value: '', name: 'Shows flexibility and inventiveness in thinking' },
         { value: '', name: 'Recognizes and recalls' },
         { value: '', name: 'Makes connections' },
         { value: '', name: 'Uses classification skills' }
      ]
   },
   {
      id: 4,
      value: 'Science & Tecnology',
      subvalue: [
         { value: '', name: 'Uses scientific inquiry skills' },
         {
            value: '',
            name: 'Demonstrates knowledge of the characteristics of living things'
         },
         {
            value: '',
            name: 'Demonstrates knowledge of the physical properties of objects and materials'
         },
         { value: '', name: "Demonstrates knowledge of Earth's environment" },
         { value: '', name: 'Uses tools and other technology to perform tasks' }
      ]
   },
   {
      id: 5,
      value: 'Social Studies',
      subvalue: [
         { value: '', name: 'Demonstrates knowledge about self' },
         {
            value: '',
            name: 'Shows basic understanding of people and how they live'
         },
         {
            value: '',
            name: 'Explores change related to familiar people or places'
         },
         { value: '', name: 'Demonstrates simple geographic knowledge' }
      ]
   },
   {
      id: 6,
      value: 'The Arts',
      subvalue: [
         { value: '', name: 'Explores musical concepts and expression' },
         { value: '', name: 'Explores dance and movement concepts' },
         { value: '', name: 'Explores drama through actions and language' }
      ]
   },
   {
      id: 7,
      value: 'English Language Acquisition',
      subvalue: [
         {
            value: '',
            name: 'Demonstrates progress in listening to and understanding Language'
         },
         { value: '', name: 'Demonstrates progress in speaking English' }
      ]
   },
   {
      id: 8,
      value: 'Physical',
      subvalue: [
         { value: '', name: 'Demonstrates traveling skills' },
         { value: '', name: 'Demonstrates balancing skills' },
         { value: '', name: 'Demonstrate gross-motor manipulative skills' },
         {
            value: '',
            name: 'Demonstrates fine-motor strength and coordination',
            focus: ['Uses fingers and hands', 'Uses writing and drawing tools']
         }
      ]
   },
   {
      id: 9,
      value: 'Literacy',
      subvalue: [
         {
            value: '',
            name: 'Demonstrates phonological awareness',
            focus: [
               'Notices and discriminates rhyme',
               'Notices and discrimanates alliteration',
               'Notices and discriminate snaller and smaller units of sound'
            ]
         },
         {
            value: '',
            name: 'Demonstrates knowledge of the alphabet',
            focus: [
               'Identifies and names letters',
               'Uses letter-sound knowledge'
            ]
         },
         {
            value: '',
            name: 'Demonstrates knowledge of print and its uses',
            focus: ['Uses and appreciates books', 'Uses print concepts']
         },
         {
            value: '',
            name: 'Comprehends and responds to books and others texts',
            focus: [
               'Interacts during read-alouds and book conversations',
               'Uses emergent reading skills',
               'Retells stories'
            ]
         },
         {
            value: '',
            name: 'Demonstrates emergent writing skills',
            focus: ['Writes name', 'Writes no convey meaning']
         }
      ]
   },
   {
      id: 10,
      value: 'Mathematics',
      subvalue: [
         {
            name: 'Uses number concepts and operations',
            value: '',
            focus: [
               'Counts',
               'Quantifies',
               'Connects numerals with their quantities'
            ]
         },
         {
            value: '',
            name: 'Explores and describes spatial relantionships and shapes',
            focus: ['Understands spatial relationships', 'Understands shapes']
         },
         { value: '', name: 'Compares and measures' },
         { value: '', name: 'Demonstrates knowledge of patterns' }
      ]
   }
];

export const SubscriptionsData: Subscription[] = [
   {
      id: 'basic',
      name: 'Basic Plan',
      price: 2.99,
      priceId: 'price_1OA186Jl9lpkDFOwq12DfMSq',
      descriptions: ['Manage Students Notes']
   },
   {
      id: 'premium',
      name: 'Premium Plan',
      price: 4.99,
      priceId: 'price_1OAHG4Jl9lpkDFOwoIFIpViH',
      descriptions: ['Manage Students Notes']
   }
];
