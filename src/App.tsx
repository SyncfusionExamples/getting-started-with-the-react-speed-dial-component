import './App.css';
import { GridComponent, ColumnDirective, ColumnsDirective, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { SpeedDialComponent, SpeedDialItemModel } from '@syncfusion/ej2-react-buttons'
import data from './data.json';
function App() {
  let gridObj: GridComponent;
  const editOptions = { allowAdding: true }
  const actionItems: SpeedDialItemModel[] = [
    { title:'Add', iconCss:'e-icons e-plus-small'},
    { title: 'Edit', iconCss: 'e-icons e-edit-3'},
    { title: 'Delete', iconCss: 'e-icons e-delete-2'},
  ]
  const addGridRecord=()=>{
    gridObj.addRecord()
  }
  return (
    <div style={{ margin: '2%' }}>
      <GridComponent ref={((grid:GridComponent)=>gridObj=grid)} id='grid' dataSource={data} width={600} editSettings={editOptions}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Invoice ID' textAlign='Right' width='100' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='80' />
          <ColumnDirective field='Freight' textAlign='Right' format='C2' width='80' />
          <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'/>
        </ColumnsDirective>
        <Inject services={[Edit]}></Inject>
      </GridComponent>
      <SpeedDialComponent target='#grid' openIconCss='e-icons e-field-settings' items={actionItems}
          position='BottomRight' direction='Left' cssClass='e-outline' clicked={addGridRecord}
          mode='Radial'></SpeedDialComponent>
    </div>
  );
}

export default App;
