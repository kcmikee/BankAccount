import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const BankAccount = buildModule("BankAccountModule", (m) => {
  const bank = m.contract("ChainBank");

  return { bank };
});

export default BankAccount;
