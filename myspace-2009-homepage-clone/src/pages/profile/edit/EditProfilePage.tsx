import React from 'react';
import FormPageLayout from '../../../components/ui/FormPageLayout';

const FormField: React.FC<{ label: string, id: string }> = ({ label, id }) => (
    <div className="mb-4">
        <label htmlFor={id} className="block font-bold text-gray-700 mb-1.5">{label}</label>
        <textarea id={id} name={id} className="w-full h-24 p-1.5 border border-black bg-white font-sans text-sm" />
    </div>
);

const EditProfilePage: React.FC = () => {
    return (
        <FormPageLayout
            title="Edit Your Profile"
            subtitle="All fields are optional and can be left empty if you want."
        >
            <form onSubmit={(e) => e.preventDefault()}>
                <fieldset className="border border-gray-300 p-2.5 mt-5">
                    <legend className="text-base font-bold text-[#003399] px-1.5">Blurbs</legend>
                    <FormField label="About me:" id="about-me" />
                    <FormField label="Who I'd like to meet:" id="meet" />
                </fieldset>

                <fieldset className="border border-gray-300 p-2.5 mt-5">
                    <legend className="text-base font-bold text-[#003399] px-1.5">Interests</legend>
                    <FormField label="General:" id="general" />
                    <FormField label="Music:" id="music" />
                    <FormField label="Movies:" id="movies" />
                    <FormField label="Television:" id="television" />
                    <FormField label="Books:" id="books" />
                    <FormField label="Heroes:" id="heroes" />
                </fieldset>

                <button type="submit" className="mt-4 font-bold text-white bg-[#003399] border-2 border-outset border-[#6699CC] px-4 py-1 cursor-pointer hover:bg-[#0044AA]">
                    Save All
                </button>
            </form>
        </FormPageLayout>
    );
};

export default EditProfilePage;
