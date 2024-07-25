require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { PRIVATE_KEY } = process.env;

// Проверяем, есть ли префикс "0x", если нет - добавляем его
const formattedPrivateKey = PRIVATE_KEY.startsWith("0x") ? PRIVATE_KEY : `0x${PRIVATE_KEY}`;

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/", // URL RPC-нодs Swisstronik.
      accounts: [formattedPrivateKey], // Используем переменную окружения для приватного ключа
      // Убедитесь, что у вас достаточно средств в этом кошельке для развертывания смарт-контракта
    },
  },
};
