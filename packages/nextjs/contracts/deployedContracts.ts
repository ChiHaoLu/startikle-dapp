/**
 * This file is autogenerated by Scaffold-Stark.
 * You should not edit it manually or your changes might be overwritten.
 */

const deployedContracts = {
  sepolia: {
    Starticle: {
      address:
        "0x01164b69267d31cc17bf5cca23e668f266b3760cf41cb6ee4c90b41a2f212d34",
      abi: [
        {
          type: "impl",
          name: "Starticle",
          interface_name: "contracts::Starticle::IStarticle",
        },
        {
          type: "struct",
          name: "core::byte_array::ByteArray",
          members: [
            {
              name: "data",
              type: "core::array::Array::<core::bytes_31::bytes31>",
            },
            {
              name: "pending_word",
              type: "core::felt252",
            },
            {
              name: "pending_word_len",
              type: "core::integer::u32",
            },
          ],
        },
        {
          type: "struct",
          name: "core::integer::u256",
          members: [
            {
              name: "low",
              type: "core::integer::u128",
            },
            {
              name: "high",
              type: "core::integer::u128",
            },
          ],
        },
        {
          type: "enum",
          name: "core::bool",
          variants: [
            {
              name: "False",
              type: "()",
            },
            {
              name: "True",
              type: "()",
            },
          ],
        },
        {
          type: "struct",
          name: "contracts::Starticle::Publication",
          members: [
            {
              name: "registered",
              type: "core::bool",
            },
            {
              name: "author_address",
              type: "core::starknet::contract_address::ContractAddress",
            },
            {
              name: "author_name",
              type: "core::felt252",
            },
            {
              name: "total_published",
              type: "core::integer::u256",
            },
            {
              name: "registry_time",
              type: "core::integer::u64",
            },
          ],
        },
        {
          type: "struct",
          name: "contracts::Starticle::Post",
          members: [
            {
              name: "index",
              type: "core::integer::u256",
            },
            {
              name: "author_address",
              type: "core::starknet::contract_address::ContractAddress",
            },
            {
              name: "title",
              type: "core::felt252",
            },
            {
              name: "post_time",
              type: "core::integer::u64",
            },
            {
              name: "likes_num",
              type: "core::integer::u256",
            },
          ],
        },
        {
          type: "interface",
          name: "contracts::Starticle::IStarticle",
          items: [
            {
              type: "function",
              name: "register",
              inputs: [
                {
                  name: "name",
                  type: "core::felt252",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "publish",
              inputs: [
                {
                  name: "title",
                  type: "core::felt252",
                },
                {
                  name: "ctx",
                  type: "core::byte_array::ByteArray",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "like",
              inputs: [
                {
                  name: "author",
                  type: "core::starknet::contract_address::ContractAddress",
                },
                {
                  name: "index",
                  type: "core::integer::u256",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "get_system_total_published_num",
              inputs: [],
              outputs: [
                {
                  type: "core::integer::u256",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_system_total_user_num",
              inputs: [],
              outputs: [
                {
                  type: "core::integer::u256",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_publication",
              inputs: [
                {
                  name: "address",
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              outputs: [
                {
                  type: "contracts::Starticle::Publication",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "is_registered",
              inputs: [
                {
                  name: "address",
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              outputs: [
                {
                  type: "core::bool",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_post",
              inputs: [
                {
                  name: "address",
                  type: "core::starknet::contract_address::ContractAddress",
                },
                {
                  name: "index",
                  type: "core::integer::u256",
                },
              ],
              outputs: [
                {
                  type: "contracts::Starticle::Post",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_context",
              inputs: [
                {
                  name: "address",
                  type: "core::starknet::contract_address::ContractAddress",
                },
                {
                  name: "index",
                  type: "core::integer::u256",
                },
              ],
              outputs: [
                {
                  type: "core::byte_array::ByteArray",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_likes",
              inputs: [
                {
                  name: "author",
                  type: "core::starknet::contract_address::ContractAddress",
                },
                {
                  name: "index",
                  type: "core::integer::u256",
                },
              ],
              outputs: [
                {
                  type: "core::integer::u256",
                },
              ],
              state_mutability: "view",
            },
          ],
        },
        {
          type: "constructor",
          name: "constructor",
          inputs: [],
        },
        {
          type: "event",
          name: "contracts::Starticle::Starticle::Register",
          kind: "struct",
          members: [
            {
              name: "author_address",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "data",
            },
            {
              name: "author_name",
              type: "core::felt252",
              kind: "data",
            },
            {
              name: "registry_time",
              type: "core::integer::u64",
              kind: "data",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::Starticle::Starticle::Publish",
          kind: "struct",
          members: [
            {
              name: "index",
              type: "core::integer::u256",
              kind: "data",
            },
            {
              name: "author_address",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "data",
            },
            {
              name: "title",
              type: "core::felt252",
              kind: "data",
            },
            {
              name: "post_time",
              type: "core::integer::u64",
              kind: "data",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::Starticle::Starticle::Like",
          kind: "struct",
          members: [
            {
              name: "author_address",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "data",
            },
            {
              name: "index",
              type: "core::integer::u256",
              kind: "data",
            },
            {
              name: "liker_address",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "data",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::Starticle::Starticle::Event",
          kind: "enum",
          variants: [
            {
              name: "Register",
              type: "contracts::Starticle::Starticle::Register",
              kind: "nested",
            },
            {
              name: "Publish",
              type: "contracts::Starticle::Starticle::Publish",
              kind: "nested",
            },
            {
              name: "Like",
              type: "contracts::Starticle::Starticle::Like",
              kind: "nested",
            },
          ],
        },
      ],
    },
  },
} as const;

export default deployedContracts;
