'use client'
import { useReducer } from "react";
import Card from "./Card";

export default function CardPanel() {
    
    const ratingReducer = (ratings:Map<string, number | null>, action:{type:string, hospitalName:string, rating:number | null}) => {
        switch(action.type) {
            case 'add': {
                const newMap = new Map<string, number | null>(ratings);
                if (action.rating===null) {
                    newMap.delete(action.hospitalName);
                    return newMap;
                } else {
                    newMap.set(action.hospitalName, action.rating);
                    return newMap;
                }
            }
            case 'remove': {
                ratings.delete(action.hospitalName);
                return new Map<string, number | null>(ratings);
            }
            default: return ratings;
        }
    }

    const [ratings, dispatchRating] = useReducer(ratingReducer, new Map<string, number | null>([["Chulalongkorn Hospital", 5], ["Rajavithi Hospital", 5], ["Thammasat University Hospital", 5]]));

    return (
        <div>
            <div style={{margin:"20px", display:"flex", flexDirection:"row",
            flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
              <Card hospitalName="Chulalongkorn Hospital" imgSrc="/img/chula.jpg" value={ratings.get("Chulalongkorn Hospital") ?? 0}
              onRating={(hospital:string, ratings:number | null)=>dispatchRating({type:'add', hospitalName:hospital, rating:ratings})}/>

              <Card hospitalName="Rajavithi Hospital" imgSrc="/img/vajira.jpg" value={ratings.get("Rajavithi Hospital") ?? 0} 
              onRating={(hospital:string, ratings:number | null)=>dispatchRating({type:'add', hospitalName:hospital, rating:ratings})}/>

              <Card hospitalName="Thammasat University Hospital" imgSrc="/img/thammasat.jpg" value={ratings.get("Thammasat University Hospital") ?? 0} 
              onRating={(hospital:string, ratings:number | null)=>dispatchRating({type:'add', hospitalName:hospital, rating:ratings})}/>
            </div>
            <div className="w-full text-xl font-medium">Rating List: {ratings.size}</div>
            {Array.from(ratings).map(([hospital, rating]) => (
                <div key={hospital} data-testid={hospital} 
                onClick={()=>{dispatchRating({type:'remove', hospitalName:hospital, rating:0});}}>
                    {hospital}: {rating}
                </div>
            ))}
        </div>
    );
}