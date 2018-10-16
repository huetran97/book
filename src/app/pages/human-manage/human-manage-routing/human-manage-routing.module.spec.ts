import { HumanManageRoutingModule } from './human-manage-routing.module';

describe('HumanManageRoutingModule', () => {
  let humanManageRoutingModule: HumanManageRoutingModule;

  beforeEach(() => {
    humanManageRoutingModule = new HumanManageRoutingModule();
  });

  it('should create an instance', () => {
    expect(humanManageRoutingModule).toBeTruthy();
  });
});
