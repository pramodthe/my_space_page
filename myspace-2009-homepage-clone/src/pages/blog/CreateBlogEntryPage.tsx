import React from 'react';
import FormPageLayout from '../../components/ui/FormPageLayout';

const RadioField: React.FC<{ name: string; id: string; label: string; description: string; defaultChecked?: boolean }> = ({ name, id, label, description, defaultChecked = false }) => (
    <div className="flex items-start gap-2 mb-2">
        <input type="radio" id={id} name={name} defaultChecked={defaultChecked} className="mt-1" />
        <div>
            <label htmlFor={id} className="font-bold cursor-pointer">{label}</label>
            <p className="text-xs text-gray-600">{description}</p>
        </div>
    </div>
);

const CreateBlogEntryPage: React.FC = () => {
    const categories = [
        "Choose a Category", "Life", "Music", "Movies", "Television", "Books",
        "Fashion", "Sports", "Tech", "Gaming", "Comedy", "Art/Photos", "Politics", "News"
    ];

    return (
        <FormPageLayout title="Create Blog Entry">
            <form onSubmit={e => e.preventDefault()} className="space-y-4">
                <div>
                    <label htmlFor="subject" className="block font-bold mb-1">Subject:</label>
                    <input type="text" id="subject" className="w-full p-1 border border-black bg-white" />
                </div>

                <div>
                    <label htmlFor="category" className="block font-bold mb-1">Category:</label>
                    <select id="category" className="w-full p-1 border border-black bg-white">
                        {categories.map(cat => <option key={cat}>{cat}</option>)}
                    </select>
                </div>

                <div>
                    <label htmlFor="content" className="block font-bold mb-1">Content:</label>
                    <textarea id="content" className="w-full h-48 p-1 border border-black bg-white font-sans text-sm"></textarea>
                </div>
                
                <fieldset className="border border-gray-300 p-2.5">
                    <legend className="font-bold px-1 text-[#003399]">Privacy:</legend>
                    <RadioField 
                        name="privacy" 
                        id="privacy-public" 
                        label="Public"
                        description="Everyone will be able to see your Blog Entry."
                        defaultChecked={true}
                    />
                    <RadioField 
                        name="privacy" 
                        id="privacy-diary" 
                        label="Diary (Private)"
                        description="Only you will be able to see your Blog Entry."
                    />
                     <RadioField 
                        name="privacy" 
                        id="privacy-friends" 
                        label="Friends"
                        description="Only your Friends will be able to see your Blog Entry."
                    />
                     <RadioField 
                        name="privacy" 
                        id="privacy-favorites" 
                        label="Favorites List"
                        description='Only the Users on your "Favorites" List will be able to see your Blog Entry.'
                    />
                    <RadioField 
                        name="privacy" 
                        id="privacy-link" 
                        label="Link-only"
                        description="Only People who know the Link to your Blog entry will be able to see it. It won't be listed on blog.spacehey.com, in the App, on the category pages, nor your blog page."
                    />
                </fieldset>

                <fieldset className="border border-gray-300 p-2.5">
                    <legend className="font-bold px-1 text-[#003399]">Comments:</legend>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-1.5">
                            <input type="radio" id="comments-enable" name="comments" defaultChecked/>
                            <label htmlFor="comments-enable">Enable Comments</label>
                        </div>
                         <div className="flex items-center gap-1.5">
                            <input type="radio" id="comments-disable" name="comments" />
                            <label htmlFor="comments-disable">Disable Comments</label>
                        </div>
                    </div>
                </fieldset>

                <button type="submit" className="font-bold text-white bg-[#003399] border-2 border-outset border-[#6699CC] px-4 py-1.5 cursor-pointer hover:bg-[#0044AA]">
                    Publish Blog Entry
                </button>
            </form>
        </FormPageLayout>
    );
};

export default CreateBlogEntryPage;