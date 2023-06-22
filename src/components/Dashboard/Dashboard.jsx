import { Tab, TabList, TabPanel, Tabs} from "react-tabs";
import SelectsClasses from "../Classes/SelectsClassess";
import AddClass from "../Classes/AddClass";


const Dashboard = () => {

  return (
    <div className="container">
      <h1>Welcome To Student Dashboard</h1>
       <Tabs>
    <TabList className='mt-5 '>
      <Tab className='btn btn-danger'>My Selected class</Tab>
      <Tab className='btn btn-danger mx-4'>My Enrolled Classes</Tab>
      <Tab className='btn btn-danger mx-4'>Add Class</Tab>
    </TabList>

    <TabPanel>
      <SelectsClasses></SelectsClasses>
  
      
    </TabPanel>
   
    <TabPanel>
      <h2>Nothing Here</h2>
     

      
    </TabPanel>
    <TabPanel>
      <AddClass></AddClass>

      
    </TabPanel>
  </Tabs>
    </div>
  );
};

export default Dashboard;
