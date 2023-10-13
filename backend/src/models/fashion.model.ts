import {Schema, model} from 'mongoose';
export interface Fashion{
   id:string;
   name:string;
   description:string;
   price:number;
   //tags!:string[];
   favorite:boolean;
   starts:number;
   imageUrl:string;
   delivery:string;
   tags: string[];
}

export const FashionSchema = new Schema<Fashion>({
   name:{type:String , required:true},
   description:{type:String , required:true},
   price:{type:Number , required:true},
   favorite:{type:Boolean , required:false},
   starts:{type:Number , required:true},
   imageUrl:{type:String , required:true},
   delivery:{type:String , required:true},
   tags:{type:[String] }
},
{
   toJSON:{
      virtuals: true
   },
   toObject:{
      virtuals:true
   },
   timestamps:true
}
);
export const  FashionModel = model<Fashion>('fashion',FashionSchema);

