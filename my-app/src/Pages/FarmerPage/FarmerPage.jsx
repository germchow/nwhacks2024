import React, {useState} from 'react';
import './FarmerPage.css';
import Select from 'react-select'

const FarmerPage = () => {

    const options = [
        {value: "blueberries", label: "Blueberries" },
        {value: "carrots", label: "Carrots" },
        {value: "cranberries", label: "Cranberries" },
        {value: "grapetomatoes", label: "Grape tomatoes" },
        {value: "grapetomatoes", label: "Lettuce" },
        {value: "potatoes", label: "Potatoes" },
        {value: "redgalaapples", label: "Red apples" },
        {value: "romatomatoes", label: "Roma tomatoes" },
        {value: "squash", label: "Squash" }
    ]

    const customStyles = {
        menu: (provided, state) => ({
          ...provided,
          width: '300px',
        }),
      };

    const [selectedProduce, setSelectedProduce] = useState(null);
    const [quantity, setQuantity] = useState("");

    const handleProduceChange = (selectedOption) => {
        setSelectedProduce(selectedOption);
      };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
      };

    const handleSubmit = () => {
        if (selectedProduce && quantity !== "") {
          console.log("Selected Produce:", selectedProduce.label);
          console.log("Quantity:", quantity);
    
          // Reset the form
          setSelectedProduce(null);
          setQuantity("");
        } else {
          console.log("Please select produce and enter quantity.");
        }
      };

      


    return (
        <div className="page-container">
            <header className="page-header">
                 <h1>Post your ugly produce</h1>
            </header>
            <div className="rounded-box">
                <img className="profile-picture" src="./HPCLogo.png" alt="HPC farm logo"></img>
                
                <div className="rightContainerFarmer">

                    <div className="toprightContainerFarmer">
                        <div className='produce-options'>
                            <p className='produce-label'>Produce:</p>
                            <Select 
                                className='options' 
                                styles={customStyles} 
                                options={options}
                                value={selectedProduce}
                                onChange={handleProduceChange}/>
                        </div>
                        <div className="quantity-input">
                            <label className='quanity'>Quantity: </label>
                            <input 
                                type="text" 
                                id="quantity" 
                                value={quantity} 
                                onChange={handleQuantityChange} 
                                placeholder="Enter quantity" 
                                />
                            <span className='quanity1'>lbs</span>
                        </div>
                    </div>

                    <button onClick={handleSubmit} className='button'>Submit</button>
                </div>
            </div>
        </div>
    
    );
};

export default FarmerPage; 