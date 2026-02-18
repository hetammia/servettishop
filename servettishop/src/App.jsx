import { useState } from 'react'

const Header = () => {
  return (
    <div>
      <h1>ServettiShop</h1>
      <p>Serving the best Servettis</p>
    </div>
  )
}

const SelectionForm = () => {
  const [selectedMaterial, setMaterial] = useState('cotton')
  const [selectedColour, setColour] = useState('white')
  const [selectedQuantity, setQuantity] = useState('10')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const handleMaterialChange = (event) => {
    setMaterial(event.target.value)
  }
  const handleColourChange = (event) => {
    setColour(event.target.value)
  }
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value)
  }
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value)
  }
  const handleEndDateChange = (event) => {
    setEndDate(event.target.value)
  }

  const handleSubmit = (event) => {
    alert(`You are renting ${selectedQuantity} ${selectedColour} ${selectedMaterial} napkins from ${startDate} until ${endDate}.`)
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Select your Servetti</h2>
        <p>Both our cotton and linen napkins come in a variety of colours. <br/>
          See below which one meets your fancy.</p>

        <h3>Napkin Material</h3>
        <label>
          <input
            type="radio"
            name="material"
            value="cotton"
            checked={selectedMaterial === 'cotton'}
            onChange={handleMaterialChange}
          /> Cotton
        </label>
        <label>
          <input 
            type='radio' 
            name='material'
            value='linen'
            checked={selectedMaterial === 'linen'}
            onChange={handleMaterialChange}
          /> Linen
        </label>

        <h3>Colour</h3>
        <label>
          <input 
            type='radio'
            name='colour'
            value='white'
            checked={selectedColour === 'white'}
            onChange={handleColourChange}
          /> White
        </label>
        <label>
          <input 
            type='radio'
            name='colour'
            value='ivory'
            checked={selectedColour === 'ivory'}
            onChange={handleColourChange}
          /> Ivory
        </label>
        <label>
          <input 
            type='radio'
            name='colour'
            value='petrol'
            checked={selectedColour === 'petrol'}
            onChange={handleColourChange}
          /> Petrol
        </label>

        <h3>Quantity</h3>
        <label>
          <input 
            type='radio'
            name='quantity'
            value='10'
            checked={selectedQuantity === '10'}
            onChange={handleQuantityChange}
          /> 10
        </label>
        <label>
          <input 
            type='radio'
            name='quantity'
            value='30'
            checked={selectedQuantity === '30'}
            onChange={handleQuantityChange}
          /> 30
        </label>
        <label>
          <input 
            type='radio'
            name='quantity'
            value='50'
            checked={selectedQuantity === '50'}
            onChange={handleQuantityChange}
          /> 50
        </label>
        <label>
          <input 
            type='radio'
            name='quantity'
            value='100'
            checked={selectedQuantity === '100'}
            onChange={handleQuantityChange}
          /> 100
        </label>
        <br/>

        <h3>Rent time</h3>
        Rent start: 
        <label>
          <input
            type='date'
            name='startDate'
            value={startDate}
            onChange={handleStartDateChange}
          />
        </label>
        <br/>
        Rent end: 
        <label>
          <input
            type='date'
            name='endDate'
            value={endDate}
            onChange={handleEndDateChange}
          />
        </label>
        <br/>
        <button type='submit'>Rent</button>
      </div>
    </form>
  )
}

const App = () => {
  return (
    <div>
      <Header />
      <SelectionForm />
      <p>Hope you found what you were looking for</p>
    </div>
  )
}

export default App