import{Fashion} from './app/shared/models/Fashion';
import { Tag } from './app/shared/models/Tag';
export const manwoman_fashion: Fashion[]=[
        {id:'1',name: 'Robe Zara ', price :190,  imageUrl:'../../assets/images/robezara.jpg' ,description:'taille:S   couleur:rouge',favorite:false,starts:4.0,delivery:'2d-3d',tags:['Robe']},
        {id:'2',name: 'jeans Bershka', price :170,imageUrl:'../../assets/images/jeansBershka.jpg',description:'taille:40   couleur:bleu ciel',favorite:false,starts:3.0,delivery:'2d-3d',tags:['Jeans']},
        {id:'3',name: 'Jupe ', price :85, imageUrl:'../../assets/images/jupe.jpg',description:'taille:S,couleur:noir   cuire',favorite:false,starts:4.0,delivery:'2d-3d',tags:['Jupe']}
        
];
export  const sample_tags:Tag[]=[
  {name:'All',count:6},
  {name:'Robe',count:1},
  {name:'Jeans',count:3},
  {name:'Jupe',count:1},
  {name:'T-shirt',count:4},
  
]//matkimalch zeyed