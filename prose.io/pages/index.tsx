import ProseItem from "../components/ProseItem";
import Prose from "../models/Prose";

export default function Home() {

  const newProse: Prose = new Prose("To be or not to be, that is the question.", "To Kill a mockingbird?", ["Tag 1", "Tag 2", "Tag 3"]);
  const proseItems: Prose[] = [];

  proseItems.push(newProse);
  proseItems.push(newProse);
  proseItems.push(newProse);

  return (
    <div className='w-full bg-slate-900'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-white text-4xl font-black mt-12'>Let's get writing</h1>
        <div className="flex mt-6 gap-x-3">
          <button className="px-6 font-semibold rounded-md bg-black text-white" type="submit">
            Add new
          </button>
          <button type="button" className="hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="flex-none text-slate-300 dark:text-slate-400" aria-hidden="true"><path d="m19 19-3.5-3.5"></path><circle cx="11" cy="11" r="6"></circle></svg><span className="flex-auto">Quick search...</span><kbd className="font-sans font-semibold dark:text-slate-500"><abbr title="Control" className="no-underline text-slate-300 dark:text-slate-500">Ctrl </abbr> K</kbd></button>
        </div>

        <div className="flex flex-col gap-y-6 mt-5 pb-24">
          {proseItems.map((proseItem: Prose, index) => (
            <ProseItem item={proseItem} key={index}></ProseItem>
          ))}
        </div>
      </div>
    </div>
  )
}
