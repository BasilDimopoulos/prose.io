import { Key } from "react";

export default function ProseItem(props: any) {
    return (
        <div className='pt-8 pb-8 pl-12 pr-14 max-w-[636px] bg-slate-800'>
            <h3 className='text-slate-200'>{props.item.source}</h3>
            <h2 className='text-slate-200 text-3xl font-black leading-9 mt-2 mb-4 font-playfair'>{props.item.proseText}</h2>
            <div className='flex gap-x-6'>
                {props.item.tags.map((tag: String, index: any) => (
                    <p key={index} className='text-slate-300'>{tag}</p>
                ))}
            </div>
        </div>
    );
}