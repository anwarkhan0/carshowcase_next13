"use client";
import React, { useState } from 'react'
import { CustomButton } from '@components';

function PromptSearch() {
  const [prompt, setPrompt] = useState('');
  const handleSubmit = ()=>{
    //chatgpt logi here
  }
  const handlePrompt = (prompt: string)=>{
    setPrompt(prompt);
  }
  return (
    <div className="">
      <textarea
        name="user-prompt"
        placeholder="for example, We are three friends visiting Kalam..."
        className="p-4 w-full h-52"
        onChange={ e => handlePrompt(e.target.value)}
      />
      <CustomButton
          btnType="button"
          title="Submit"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleSubmit}
        />
    </div>
  );
}

export default PromptSearch;