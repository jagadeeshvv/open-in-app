

import React, { useState } from 'react';
import {  user_photo } from '../utils/contrants';

const UploadPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [fileName, setFileName] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [uploadedLinks, setUploadedLinks] = useState([]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFileName(selectedFile.name);
    setIsFileUploaded(true);
  };

  const handleFileUpload = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      const uploadedLink = 'https://example.com';
      setUploadedLinks([...uploadedLinks, uploadedLink]);
      setIsFileUploaded(false);
      setFileName('');
    }, 2000);
  };

  const handleRemoveFile = () => {
    setIsFileUploaded(false);
    setFileName('');
    setUploadedLinks([]);
  };

  const handleTagSelection = (event, rowIndex) => {
    const selectedTag = event.target.value;
    const updatedTags = [...selectedTags];

    const isTagSelected = updatedTags[rowIndex]?.includes(selectedTag);

    if (isTagSelected) {
      updatedTags[rowIndex] = updatedTags[rowIndex].filter((tag) => tag !== selectedTag);
    } else {
      updatedTags[rowIndex] = [...(updatedTags[rowIndex] || []), selectedTag];
    }

    setSelectedTags(updatedTags);
  };

  const handleRemoveSelectedTag = (rowIndex, tagToRemove) => {
    const updatedTags = [...selectedTags];
    updatedTags[rowIndex] = updatedTags[rowIndex].filter((tag) => tag !== tagToRemove);
    setSelectedTags(updatedTags);
  };

  return (
    <div className="w-[1052px]">
      <div>
        <p className="font-figtree text-[24px] leading-[32px] font-semibold relative top-[50px] left-[50px]">
          Upload CSV
        </p>
        <img src='https://i.ibb.co/2F7xRVQ/Vector-2.png' className='w-[18px] h-[23px] absolute left-[1420px]' alt='icon' />
        <img className='w-[42px] h-[41px] absolute left-[1470px] top-[20px] rounded-[20px]' src={user_photo} alt='icon' />
      </div>

      <div className="bg-white w-[596px] h-[367px] absolute top-[100px] left-[518px] rounded-[8px]">
        <div className="w-[564px] h-[258px] border border-dashed relative top-[16px] left-[16px]">
          <div className="w-[290px] h-[76px] relative top-[114px] left-[165px]">
            <img
              src="https://i.ibb.co/7pcFWYz/Microsoft-Office-Excel-2019-present-1.png"
              className="relative left-[100px]"
              alt="Excel Icon"
            />
            {isFileUploaded ? (
              <div>
                <p className="font-figtree text-[#999CA0] align-bottom relative left-[30px]">
                  {fileName}
                </p>
                <button
                  className="text-red-500 cursor-pointer relative left-[90px]"
                  onClick={handleRemoveFile}
                >
                  Remove
                </button>
              </div>
            ) : (
              <>
                <p className="font-figtree text-[#999CA0] align-bottom">
                  Drop your Excel sheet here{' '}
                  <label className="cursor-pointer text-[#605BFF]">
                    Browse
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                </p>
              </>
            )}
          </div>
        </div>

        <button style={{ height: "60px" }}
          className={`${
            isLoading && ' cursor-not-allowed '
          } align-middle bg-[#605BFF] w-[564px] font-figtree font-semibold text-[14px] leading-[24px] text-white rounded-[8px] absolute top-[295px] left-[16px]`}
          onClick={handleFileUpload}
          disabled={isLoading || !isFileUploaded}
        >
          {isLoading ? (
            <div className="">
              <div class="w-10 h-10 relative left-[250px] border-4 border-transparent border-t-4 border-white rounded-full animate-spin-2"></div>
            </div>
          ) : (
            <>
              <img
                src="https://i.ibb.co/BwxnJ67/Icon.png"
                className="relative left-[230px] top-[12px]"
                alt="Upload Icon"
              />
              <span className='relative top-[-10px]'>Upload</span>
            </>
          )}
        </button>
      </div>

      <div className="mt-8 relative top-[400px] left-[50px] w-[1065px]">
        <p className="font-figtree text-[24px] leading-[32px] font-semibold ml-24">
          Uploads
        </p>

        <div className="bg-[#F5F5F5] w-full mt-4 p-4 rounded-[8px] relative left-[100px] font-figtree font-normal text-[14px] leading-[24px]">
          <table className=" w-[900px] rounded-[8px] ">
            <thead>
              <tr>
                <th className="py-2">SI no</th>
                <th className="py-2">Links</th>
                <th className="py-2">Prefix</th>
                <th className="py-2">Add Tags</th>
                <th className="py-2">Selected Tags</th>
              </tr>
            </thead>
            <tbody>
              {uploadedLinks.map((link, index) => (
                <tr key={index} className="h-[38px]  relative left-3 bg-white rounded-lg m-6">
                  <td className="px-2 relative left-2">0{index + 1}</td>
                  <td className="px-3  relative left-16 text-blue-400">{link}</td>
                  <td className="py-2  relative left-11">PrefixSample</td>
                  <td className="py-2  relative left-11">
                    <select
                      className='w-[150px] h-[40px] rounded-[8px] border-[1px] font-figtree font-normal'
                      onChange={(event) => handleTagSelection(event, index)}
                      value={selectedTags[index]?.join(',')}
                    >
                      <option value="" className='bg-[#F5f5f5] w-[134px] h-[40px] rounded-[8px] p-[8px] g-[4px]'>
                        Select Tag
                      </option>
                      <option value="TAG 1 X" className='bg-[#F5f5f5] w-[134px] h-[40px] rounded-[8px] '>Tag 1  </option>
                      <option value="TAG 2 X" className=''>Tag 2 </option>
                      <option value="TAG 3 X" className=''>Tag 3 </option>
                      <option value="TAG 4 X" className=''>Tag 4 </option>
                      <option value="TAG 5 X" className=''>Tag 5 </option>
                      <option value="TAG 6 X" className=''>Tag 6  </option>
                      <option value="TAG 7 X" className=''>Tag 7 </option>
                      <option value="TAG 8 X" className=''>Tag 8 </option>
                      <option value="TAG 9 X" className=''>Tag 9 </option>
                      <option value="TAG 10 X" className=''>Tag 10 </option>
                    </select>
                  </td>
                  <td className='flex gap-[4px]   relative left-10 top-2'>
                    {selectedTags[index]?.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-[#605BFF] w-[58px] h-[24px] rounded-[4px] flex items-center justify-center text-white cursor-pointer"
                        onClick={() => handleRemoveSelectedTag(index, tag)}
                      >
                        {tag}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
