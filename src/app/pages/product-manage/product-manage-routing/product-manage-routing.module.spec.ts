import { ProductManageRoutingModule } from './product-manage-routing.module';

describe('ProductManageRoutingModule', () => {
  let productManageRoutingModule: ProductManageRoutingModule;

  beforeEach(() => {
    productManageRoutingModule = new ProductManageRoutingModule();
  });

  it('should create an instance', () => {
    expect(productManageRoutingModule).toBeTruthy();
  });
});
