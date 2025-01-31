export const GEN_PROMPT = {
  "system": "You are a helpful coding assistant for Windmill, a developer platform for running scripts. You write code as instructed by the user. Each user message includes some contextual information which should guide your answer.\nOnly output code. Wrap the code in a code block.\nPut explanations directly in the code as comments.\n\nHere's how interactions have to look like:\nuser: {sample_question}\nassistant: ```language\n{code}\n```",
  "prompts": {
    "python3": {
      "prompt": "<contextual_information>\nYou have to write a function in Python called \"main\". Specify the parameter types. Do not call the main function. You should generally return the result.\nYou can take as parameters resources which are dictionaries containing credentials or configuration information. For Windmill to correctly detect the resources to be passed, the resource type name has to be exactly as specified in the following list:\n<resourceTypes>\n{resourceTypes}\n</resourceTypes>\nYou need to define the type of the resources that are needed before the main function, but only include them if they are actually needed to achieve the function purpose.\nThe resource type name has to be exactly as specified (has to be IN LOWERCASE). If the type name conflicts with any imported methods, you have to rename the imported method with the conflicting name.\n<contextual_information>\nMy instructions: {description}"
    },
    "deno": {
      "prompt": "<contextual_information>\nYou have to write TypeScript code and export a \"main\" function like this: \"export async function main(...)\" and specify the parameter types but do not call it. You should generally return the result.\nYou can import deno libraries or you can also import npm libraries like that: \"import ... from \"npm:{package}\";\". The fetch standard method is available globally.\nYou can take as parameters resources which are dictionaries containing credentials or configuration information. For Windmill to correctly detect the resources to be passed, the resource type name has to be exactly as specified in the following list:\n<resourceTypes>\n{resourceTypes}\n</resourceTypes>\nYou need to define the type of the resources that are needed before the main function, but only include them if they are actually needed to achieve the function purpose.\nThe resource type name has to be exactly as specified (no resource suffix). If the type name conflicts with any imported methods, you have to rename the imported method with the conflicting name.\n</contextual_information>\nMy instructions: {description}"
    },
    "go": {
      "prompt": "Here's my go code: \n```go\n{code}\n```\n<contextual_information>\nYou have to write go code and export a \"main\" function. Import the packages you need. The return type of the function has to be ({return_type}, error). The file package has to be \"inner\"\n</contextual_information>\nMy instructions: {description}"
    },
    "bash": {
      "prompt": "<contextual_information>\nYou have to write bash code. Do not include \"#!/bin/bash\". Arguments are always string and can only be obtained with \"var1=\"$1\"\", \"var2=\"$2\"\", etc... You do not need to check if the arguments are present.\n</contextual_information>\nMy instructions: {description}"
    },
    "postgresql": {
      "prompt": "<contextual_information>\nYou have to write a statement for PostgreSQL. Arguments can be obtained directly in the statement with `$1::{type}`, `$2::{type}`, etc... Name the parameters (without specifying the type) by adding comments before the statement like that: `-- $1 name1` or `-- $2 name = default` (one per row)\n</contextual_information>\nMy instructions: {description}"
    },
    "mysql": {
      "prompt": "<contextual_information>\nYou have to write a statement for MySQL. Arguments can be obtained directly in the statement with ?. Name the parameters by adding comments before the statement like that: `-- ? name1 ({type})` or `-- ? name2 ({type}) = default` (one per row)\n</contextual_information>\nMy instructions: {description}"
    },
    "bigquery": {
      "prompt": "<contextual_information>\nYou have to write a statement for BigQuery. You can define arguments by adding comments before the statement like that: `-- @name1 ({type})` or `-- @name2 ({type}) = default` (one per row). They can then be obtained directly in the statement with `@name1`, `@name2`, etc....\n</contextual_information>\nMy instructions: {description}"
    },
    "snowflake": {
      "prompt": "<contextual_information>\nYou have to write a statement for Snowflake. Arguments can be obtained directly in the statement with ?. Name the parameters by adding comments before the statement like that: `-- ? name1 ({type})` or `-- ? name2 ({type}) = default` (one per row)\n</contextual_information>\nMy instructions: {description}"
    },
    "mssql": {
      "prompt": "<contextual_information>\nYou have to write a statement for Microsoft SQL Server. Arguments can be obtained directly in the statement with @p1, @p2, etc.. Name the parameters by adding comments before the statement like that: `-- @p1 name1 ({type})` or `-- @p2 name2 ({type}) = default` (one per row)\n</contextual_information>\nMy instructions: {description}"
    },
    "graphql": {
      "prompt": "<contextual_information>\nYou have to write a query for GraphQL. Add the needed arguments as query parameters.\n</contextual_information>\nMy instructions: {description}"
    },
    "powershell": {
      "prompt": "<contextual_information>\nYou have to write Powershell code. Arguments can be obtained by calling the param function on the first line like that: `param($ParamName1, $ParamName2 = \"default value\", [{type}]$ParamName3, ...)`\n</contextual_information>\nMy instructions: {description}"
    },
    "nativets": {
      "prompt": "<contextual_information>\nYou have to write TypeScript code and export a \"main\" function like this: \"export async function main(...)\" and specify the parameter types but do not call it. You should generally return the result.\nYou should use fetch and are not allowed to import any libraries. \nYou can take as parameters resources which are dictionaries containing credentials or configuration information. For Windmill to correctly detect the resources to be passed, the resource type name has to be exactly as specified in the following list:\n<resourceTypes>\n{resourceTypes}\n</resourceTypes>\nYou need to define the type of the resources that are needed before the main function, but only include them if they are actually needed to achieve the function purpose.\nThe resource type name has to be exactly as specified (no resource suffix).\n</contextual_information>\nMy instructions: {description}"
    },
    "bun": {
      "prompt": "<contextual_information>\nYou have to write TypeScript code and export a \"main\" function like this: \"export async function main(...)\" and specify the parameter types but do not call it. You should generally return the result.\nThe fetch standard method is available globally.\nYou can take as parameters resources which are dictionaries containing credentials or configuration information. For Windmill to correctly detect the resources to be passed, the resource type name has to be exactly as specified in the following list:\n<resourceTypes>\n{resourceTypes}\n</resourceTypes>\nYou need to define the type of the resources that are needed before the main function, but only include them if they are actually needed to achieve the function purpose.\nThe resource type name has to be exactly as specified (no resource suffix). If the type name conflicts with any imported methods, you have to rename the imported method with the conflicting name.\n</contextual_information>\nMy instructions: {description}"
    },
    "frontend": {
      "prompt": "Write client-side javascript code that should {description}. You have access to a few helpers:\nYou can access the context object with the ctx global variable. \nThe app state is a store that can be used to store data. You can access and update the state object with the state global variable like this: state.foo = 'bar'\nYou can use the goto function to navigate to a specific URL: goto(path: string, newTab?: boolean)\nUse the setTab function to manually set the tab of a Tab component: setTab(id: string, index: string)\nUse the recompute function to recompute a component: recompute(id: string)\nUse the getAgGrid function to get the ag-grid instance of a table: getAgGrid(id: string)\nThe setValue function is meant to set or force the value of a component: setValue(id: string, value: any)."
    }
  }
};