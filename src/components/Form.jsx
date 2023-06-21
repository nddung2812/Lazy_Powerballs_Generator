import { useState } from 'react';
import { useForm } from 'react-hook-form';

const MyForm = () => {
  const { register, handleSubmit } = useForm();
  const [realData, setRealData] = useState({})
  const onSubmit = (data) => {
    console.log(data);
    setRealData(data) // Access the number value here
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="number"
          name="startNumber"
          placeholder='Enter start no...'
          {...register("startNumber")} />

        <input type="number"
          name="endNumber"
          placeholder='Enter ending no...'
        {...register("endNumber")} />

        <input type="number"
          name="comboNumber"
          placeholder='Enter combo no...'
        {...register("comboNumber")} />
        <button type="submit">Submit</button>
      </form>
      <div className="summary-ctn">
        <h2>Your have entered </h2>
        <h2>Start: {realData?.startNumber}</h2>
        <h2>End: {realData?.endNumber}</h2>
        <h2>Combos: {realData?.comboNumber}</h2>
      </div>

    </>
  );
}

export default MyForm;