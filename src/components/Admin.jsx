import React from 'react';
import PropTypes from 'prop-types';


export default function Admin(props){

    let _other = null;
    let _library = null;
    let _language = null;

    function handleNewOtherFormSubmission(event) {
        event.preventDefault();
        props.onNewOtherSkillCreation(_other.value);
        _other.value = '';
    }

    function handleNewLibraryFormSubmission(event) {
        event.preventDefault();
        props.onNewLibrarySkillCreation(_library.value);
        _library.value = '';
    }

    function handleNewLanguageFormSubmission(event) {
        event.preventDefault();
        props.onNewLanguageSkillCreation(_language.value);
        _language.value = '';
    }


    return (
        <div id="adminDiv">
            <style jsx>{`
                #adminDiv {
                    margin-top: 120px;
                    color: white;
                }
                `}</style>
            <div>
                <p>Admin Page</p>
            </div>
            <div>
                <p>Enter new skills for the "Other" section:</p>
                <form onSubmit={handleNewOtherFormSubmission}>
                    <input
                        type="text"
                        id="skills"
                        placeholder="Enter new 'other' skill Here..."
                        ref={input => {
                            _other = input;
                        }}
                        />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div>
                <p>Enter new skills for the "Frameworks and Libraries" section:</p>
                <form onSubmit={handleNewLibraryFormSubmission}>
                    <input
                        type="text"
                        id="skills"
                        placeholder="Enter new 'library' skill Here..."
                        ref={input => {
                            _library = input;
                        }}
                        />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div>
                <p>Enter new skills for the "Languages" section:</p>
                <form onSubmit={handleNewLanguageFormSubmission}>
                    <input
                        type="text"
                        id="skills"
                        placeholder="Enter new 'language' skill Here..."
                        ref={input => {
                            _language = input;
                        }}
                        />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

Admin.propTypes = {
    onNewLibrarySkillCreation: PropTypes.func,
    onNewOtherSkillCreation: PropTypes.func,
    onNewLanguageSkillCreation: PropTypes.func
}