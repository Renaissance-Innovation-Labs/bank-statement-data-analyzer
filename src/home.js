import { Button } from '@deposits/ui-kit-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormItem from './component/FormItem';
import OverviewCard from './component/OverviewCard';
import {
  credit,
  debit,
} from './assets/svg';
// import Chart from 'react-google-charts';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

export default function Home() {

    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = (event) => {
    event.preventDefault(); 
    if (selectedFile) {
      console.log('Selected File:', selectedFile);
    }
  };

  const data = [
  ["Task", "Hours per Day"],
  ["Transfers", 20],
  ["POS withdrawals", 20],
  ["ATM withdrawals", 20],
  ["Others", 20],
];

const options = {
  title: "My Daily Activities",
};

ChartJS.register(ArcElement, Tooltip, Legend);

const newData = {
  labels: ['ATM withdrawals', 'POS withdrawals', 'Others', 'Transfers',],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5],
      backgroundColor: [
        'rgba(22, 191, 214, 1)',
        'rgba(247, 101, 163, 1)',
        'rgba(205, 205, 205, 1)',
        'rgba(22, 91, 170, 1)',
      ],
      borderColor: [
        'rgba(22, 191, 214, 1)',
        'rgba(247, 101, 163, 1)',
        'rgba(205, 205, 205, 1)',
        'rgba(22, 91, 170, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const handleScope = async (event) => {

    if (!selectedFile) {
      alert('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('statement', selectedFile);

    try {
      const response = await fetch('https://findive.vercel.app/api/v1/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('File uploaded successfully!');
        console.log(response.body);
      } else {
        alert('File upload failed.');
      }
    } catch (error) {

      console.error('Error:', error);
    }
  };


  return (
    <div>
      <div className=" flex flex-col items-center lg:pb- bg-neutral_01">
        <section className="flex-1 lg:flex-initial w-full md:max-w-[650px] h-fit p-6 lg:p-10 text-left rounded-t-2xl lg:rounded-lg ">
        <h1 className="text-center text-[48px] font-[500]">AI Powered Data Scope </h1>
        <p className="text-black md:text-lg text-sm lg:text-base text-[16px] font-[300] mt-1 md:mt-1 text-center">
         FinDive is an AI powered tool that helps you  track your financial moves by leveraging on your bank statements to give you result. 
        </p>

        <form onSubmit={handleUpload}>

          {selectedFile ? 
          (<div className="bg-[#2D88F0] mt-16 mb-2 w-[200px] text-sm rounded-full px-2 py-2 text-white">
              {selectedFile.name}
            </div>) :
            (<div className="w-full mt-16 text-sm rounded-full px-2 py-2 text-[#939393]">
              {'Select a PDF file'}
            </div>)}

          <div className='relative h-[55px] border-2 rounded-full text-base p-3 border-[#165BAA] focus:outline- focus:outline-[#165BAA]'>
            <input
            type="file"
            accept=".pdf"
            placeholder="Upload Bank Statement"
            onChange={handleFileSelect}
            // className="hidden"
            id="fileInput"
            className='w-full hidden'
          />

            <label htmlFor="fileInput" className="absolute top-2 lg:top-2 right-2 cursor-pointer flex items-center justify-center">
            <div className="bg-[#2D88F0] w-[110px] text-sm rounded-full px-4 py-2 text-white">
              Upload PDF
            </div>
          </label>
          </div>

      </form>

          <div className="mt-8 pl-44">
              <Button
                className="!bg-[#2D88F0] !w-[189px] !border-0 rounded-xl !px-10 !py-3 text-white"
                size="small"
                disable={errors}
                onClick={() => handleScope()}
              >
                Scope this file
              </Button>
            </div>
      </section>
    </div>

    <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4 mx-56">

          <div>
            <div className="bg-[#165BAA] items-start rounded-lg !px-2 lg:!px-4 py-6">

          <div className="mx-2 flex-1 px-4">
            <p className={`text-[#E0E0E0] text-start text-sm font-[500]`}>
              Current Balance
            </p>

            <div >
              <p className={`text-white text-start text-[32px] font-[600]`}>
                ₦0
              </p>

            </div>

            <div className={`text-start text-[#E0E0E0] text-xs font-[500] mt-20`}>
              0112938472 Deborah Inyang (Gtbank)
            </div>

          </div>
        </div>


        <div className='flex justify-between mt-4'>
          <div className=" w-[230px] border-2 broder-[#D1D1D1] items-start rounded-lg !px-2 lg:!px-4 py-6">

          <div className="mx-2 flex-1">
            <div className='flex'>
              <img
                  src={credit}
                  alt="credit"
                />

              <p className={`text-[#31A574] text-start text-sm font-[500] pl-2`}>
              Total Credit
            </p>
            </div>

            <div >
              <p className={`text-[#333333] text-start text-[24px] font-[600]`}>
                ₦0
              </p>

            </div>

          </div>
        </div>

        <div className=" w-[230px] border-2 broder-[#D1D1D1] items-start rounded-lg !px-2 lg:!px-4 py-6">

          <div className="mx-2 flex-1">
            <div className='flex'>
              <img
                  src={debit}
                  alt="credit"
                />

              <p className={`text-[#DF0303] text-start text-sm font-[500] pl-2`}>
              Total Debit
            </p>
            </div>

            <div >
              <p className={`text-[#333333] text-start text-[28px] font-[600]`}>
                ₦0
              </p>

            </div>

          </div>
        </div>
        </div>
          </div>

        <div className="items-start !px-2 lg:!px-4">

          <div className="mx-2 flex-1">
            <p className={`text-[#000000] text-start text-2xl font-[500]`}>
              Expenses history
            </p>

            <div className='ml-8 mt-4'>
              <p className={`text-[#BDBDBD] text-start text-base font-[600]`}>
                Expenses
              </p>

               <p className={`text-[#1B1B1B] text-start text-sm font-[400] py-1`}>
                June 13th, 2023 - September 25th, 2023
              </p>

            </div>

            <div className='mt-6 border-[1px]'>
            </div>

            <Pie data={newData} className='mb-8'/>


            {/* <Chart
              chartType="PieChart"
              data={data}
              // options={options}
              width={"100%"}
              height={"100px"}
              className='!w-[700px] !h-[700px] !mt-2'
            /> */}

          </div>
        </div>
    </div>
    </div>

    
  )
}
