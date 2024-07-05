import React, { useEffect, useState } from 'react'
// import { api } from '../data.js/task4'
import Loader from './Loader';

function Task4() {
    const [datas, setDatas] = useState([]);
    const[loading, setLoading] = useState(false)
    const [countrySelect, setCountrySelect] = useState({countryName : ""})
    const [country, setCountry] = useState("India")

    const api = `http://universities.hipolabs.com/search?country=${country}`
    var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua", "Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia, Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

    async function fetchData(){
        setLoading(true)
        const apiData = await fetch(api)
        const result =  await apiData.json();
        console.log(result)
        setDatas(result)
        setLoading(false)

    }
    useEffect(() => {
        fetchData()   
    }, [country])

    console.log(datas)
    function changeHandler(e){
    
    setCountry(e.target.value)
    console.log(country);
    }

    return (
        

        
        <div className='w-full '>


            <div className='w-min-10/12 mx-auto'>
            <div className='space-x-4 space-y-4 my-16 mx-auto text-white'>
            <label htmlFor="country" className='text-violet-700 font-bold text-xl'>Select Country</label>

            <select className=' border bottom-2 border-black px-3 text-black' 
            name="countryName" id="country" onChange={changeHandler} value={countrySelect.countryName}>
                {
                    country_list.map((data, index) =>(
                        <option  key={index} value={`${data}`}>{data}</option>
                    ))
                }
            </select>
            </div>
            <table className= ' w-full'>
                <thead className='bg-rose-600 mx-auto'>
                    <tr>
                        <td className='py-3 px-8'>
                            SR NO
                        </td>
                        <td className='py-3 px-8'>
                            UNIVERSITY NAME
                        </td>
                        {/* <td>
                            STATE-PROVINCE

                        </td> */}
                        <td className='py-3 px-8'>
                            WEBSITE LINK

                        </td>
                    </tr>
                </thead>
                {
                    loading ?
                      (<Loader />):
                      (<tbody className=''>
                        {
                            datas.map((data, index) => 
                                (
                                <tr key={index} className={`${index%2 ? "bg-slate-300": "bg-white"}`}>
                                    <td className='py-3 px-8'>{index + 1}</td>
                                    <td>{data.name}</td>
                                    {/* <td>{data.state-province}</td> */}
                                    <td>{data.web_pages}</td>
                                </tr>
                                )
                            
                                
                            )
                        }
                        </tbody>)
                }
            </table>
            </div>

        </div>
    )
}

export default Task4