const express = require('express');
const router = express.Router();


const CustomersController = require('../controllers/customers');
const RepairsController = require('../controllers/repairs');
const DetailsController = require('../controllers/details');
const BrandsController = require('../controllers/brands');
const EquipmentsController = require('../controllers/equipments');
const StatesController = require('../controllers/states');
const EmployeesController = require('../controllers/employees');
const ModelsController = require('../controllers/models');


router.route('/customers')
    .get(CustomersController.index)
    .post(CustomersController.newCustomer);

router.route('/customers/:customerId')
    .get(CustomersController.getCustomer)
    .put(CustomersController.replaceCustomer)
    .delete(CustomersController.deleteCustomer);

router.route('/customers/:customerId/repairs')
    .get(CustomersController.getCustomerRepairs)
    .post(CustomersController.newCustomerRepair);




router.route('/repairs')
    .get(RepairsController.index)
    .post(RepairsController.newRepair);

router.route('/repairs/:repairId')
    .get(RepairsController.getRepair)
    .put(RepairsController.replaceRepair)
    .delete(RepairsController.deleteRepair);


router.route('/details')
    .get(DetailsController.index)
    .post(DetailsController.newDetail);
    
router.route('/details/:detailId')
    .get(DetailsController.getDetail)
    .put(DetailsController.replaceDetail)
    .delete(DetailsController.deleteDetail);


router.route('/brands')
    .get(BrandsController.index)
    .post(BrandsController.newBrand);

router.route('/brands/:brandId')
    .put(BrandsController.replaceBrand)
    .delete(BrandsController.deleteBrand);




router.route('/equipments')
    .get(EquipmentsController.index)
    .post(EquipmentsController.newEquipment);

router.route('/equipments/:equipmentId')
    .put(EquipmentsController.replaceEquipment)
    .delete(EquipmentsController.deleteEquipment);


router.route('/states')
    .get(StatesController.index)
    .post(StatesController.newState);

router.route('/states/:stateId')
    .put(StatesController.replaceState)
    .delete(StatesController.deleteState);


router.route('/employees')
    .get(EmployeesController.index)
    .post(EmployeesController.newEmployee);

router.route('/employees/:employeeId')
    .put(EmployeesController.replaceEmployee)
    .delete(EmployeesController.deleteEmployee);


router.route('/models')
    .get(ModelsController.index)
    .post(ModelsController.newModel);

router.route('/models/:modelId')
    .put(ModelsController.replaceModel)
    .delete(ModelsController.deleteModel);


module.exports = router;

