async function main() {
  const MyBC = await ethers.getContractFactory("MyBC")

  // Start deployment, returning a promise that resolves to a contract object
  const myBC = await MyBC.deploy()
  await myBC.deployed()
  console.log("Contract deployed to address:", myBC.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

