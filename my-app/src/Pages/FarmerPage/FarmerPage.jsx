import React, {useState} from 'react';
import './FarmerPage.css';
import Select from 'react-select'

const FarmerPage = ({cards, cardsSetter}) => {

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
    const [address, setAddress] = useState("")
    const [farmName, setFarmName] = useState("")

    const handleProduceChange = (selectedOption) => {
        setSelectedProduce(selectedOption);
      };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
      };
    
    const handleAddressChange = (event) => {
      setAddress(event.target.value);
    };

    const handleFarmNameChange = (event) => {
      setFarmName(event.target.value);
    };
    
    const handleSubmit = () => {
        if (selectedProduce && quantity !== "") {
          console.log("Selected Produce:", selectedProduce.label);
          console.log("Quantity:", quantity);

          cardsSetter(
            [
              ...cards,
              {
                name: farmName,
                address: address,
                distance: 0.0,
                rating: 0.0,
                produceType: selectedProduce.label,
                weight: quantity,
                timeSincePost: 0.0,
                produceUrl:'./potatoes.png',
              }
            ]
          )
    
          // Reset the form
          setSelectedProduce(null);
          setQuantity("");
          setAddress("");
          setFarmName("");
        } else {
          console.log("Please select produce and enter quantity.");
        }
      };

      


    return (
        <div className="page-container">
            <header className="page-header">
                 <h1 className='uglyProduce'>Post your ugly produce</h1>
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

                        <div className="farm_name">
                            <label className='farm_name_label'>Farm Name: </label>
                            <input 
                                type="text" 
                                id="farm_name"
                                value={farmName}
                                onChange={handleFarmNameChange}  
                                placeholder="Enter farm name" 
                                />
                        </div>

                        <div className="address_name">
                            <label className='address_name_label'>Address: </label>
                            <input 
                                type="text" 
                                id="address_name" 
                                value={address}
                                onChange={handleAddressChange} 
                                placeholder="Enter address" 
                                />
                        </div>
                    </div>

                    <button onClick={handleSubmit} className='button'>Submit</button>
                </div>
            </div>
        </div>
    
    );
};

export default FarmerPage; 