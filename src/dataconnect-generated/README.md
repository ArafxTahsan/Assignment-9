# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListTestCasesBySuite*](#listtestcasesbysuite)
- [**Mutations**](#mutations)
  - [*CreateProject*](#createproject)
  - [*CreateTestSuite*](#createtestsuite)
  - [*LogTestExecution*](#logtestexecution)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListTestCasesBySuite
You can execute the `ListTestCasesBySuite` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listTestCasesBySuite(vars: ListTestCasesBySuiteVariables, options?: ExecuteQueryOptions): QueryPromise<ListTestCasesBySuiteData, ListTestCasesBySuiteVariables>;

interface ListTestCasesBySuiteRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListTestCasesBySuiteVariables): QueryRef<ListTestCasesBySuiteData, ListTestCasesBySuiteVariables>;
}
export const listTestCasesBySuiteRef: ListTestCasesBySuiteRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listTestCasesBySuite(dc: DataConnect, vars: ListTestCasesBySuiteVariables, options?: ExecuteQueryOptions): QueryPromise<ListTestCasesBySuiteData, ListTestCasesBySuiteVariables>;

interface ListTestCasesBySuiteRef {
  ...
  (dc: DataConnect, vars: ListTestCasesBySuiteVariables): QueryRef<ListTestCasesBySuiteData, ListTestCasesBySuiteVariables>;
}
export const listTestCasesBySuiteRef: ListTestCasesBySuiteRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listTestCasesBySuiteRef:
```typescript
const name = listTestCasesBySuiteRef.operationName;
console.log(name);
```

### Variables
The `ListTestCasesBySuite` query requires an argument of type `ListTestCasesBySuiteVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListTestCasesBySuiteVariables {
  suiteId: UUIDString;
}
```
### Return Type
Recall that executing the `ListTestCasesBySuite` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListTestCasesBySuiteData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListTestCasesBySuiteData {
  testCases: ({
    id: UUIDString;
    title: string;
    steps: string;
    expectedResult: string;
  } & TestCase_Key)[];
}
```
### Using `ListTestCasesBySuite`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listTestCasesBySuite, ListTestCasesBySuiteVariables } from '@dataconnect/generated';

// The `ListTestCasesBySuite` query requires an argument of type `ListTestCasesBySuiteVariables`:
const listTestCasesBySuiteVars: ListTestCasesBySuiteVariables = {
  suiteId: ..., 
};

// Call the `listTestCasesBySuite()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listTestCasesBySuite(listTestCasesBySuiteVars);
// Variables can be defined inline as well.
const { data } = await listTestCasesBySuite({ suiteId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listTestCasesBySuite(dataConnect, listTestCasesBySuiteVars);

console.log(data.testCases);

// Or, you can use the `Promise` API.
listTestCasesBySuite(listTestCasesBySuiteVars).then((response) => {
  const data = response.data;
  console.log(data.testCases);
});
```

### Using `ListTestCasesBySuite`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listTestCasesBySuiteRef, ListTestCasesBySuiteVariables } from '@dataconnect/generated';

// The `ListTestCasesBySuite` query requires an argument of type `ListTestCasesBySuiteVariables`:
const listTestCasesBySuiteVars: ListTestCasesBySuiteVariables = {
  suiteId: ..., 
};

// Call the `listTestCasesBySuiteRef()` function to get a reference to the query.
const ref = listTestCasesBySuiteRef(listTestCasesBySuiteVars);
// Variables can be defined inline as well.
const ref = listTestCasesBySuiteRef({ suiteId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listTestCasesBySuiteRef(dataConnect, listTestCasesBySuiteVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.testCases);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.testCases);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateProject
You can execute the `CreateProject` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createProject(vars: CreateProjectVariables): MutationPromise<CreateProjectData, CreateProjectVariables>;

interface CreateProjectRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateProjectVariables): MutationRef<CreateProjectData, CreateProjectVariables>;
}
export const createProjectRef: CreateProjectRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createProject(dc: DataConnect, vars: CreateProjectVariables): MutationPromise<CreateProjectData, CreateProjectVariables>;

interface CreateProjectRef {
  ...
  (dc: DataConnect, vars: CreateProjectVariables): MutationRef<CreateProjectData, CreateProjectVariables>;
}
export const createProjectRef: CreateProjectRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createProjectRef:
```typescript
const name = createProjectRef.operationName;
console.log(name);
```

### Variables
The `CreateProject` mutation requires an argument of type `CreateProjectVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateProjectVariables {
  name: string;
  description?: string | null;
}
```
### Return Type
Recall that executing the `CreateProject` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateProjectData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateProjectData {
  project_insert: Project_Key;
}
```
### Using `CreateProject`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createProject, CreateProjectVariables } from '@dataconnect/generated';

// The `CreateProject` mutation requires an argument of type `CreateProjectVariables`:
const createProjectVars: CreateProjectVariables = {
  name: ..., 
  description: ..., // optional
};

// Call the `createProject()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createProject(createProjectVars);
// Variables can be defined inline as well.
const { data } = await createProject({ name: ..., description: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createProject(dataConnect, createProjectVars);

console.log(data.project_insert);

// Or, you can use the `Promise` API.
createProject(createProjectVars).then((response) => {
  const data = response.data;
  console.log(data.project_insert);
});
```

### Using `CreateProject`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createProjectRef, CreateProjectVariables } from '@dataconnect/generated';

// The `CreateProject` mutation requires an argument of type `CreateProjectVariables`:
const createProjectVars: CreateProjectVariables = {
  name: ..., 
  description: ..., // optional
};

// Call the `createProjectRef()` function to get a reference to the mutation.
const ref = createProjectRef(createProjectVars);
// Variables can be defined inline as well.
const ref = createProjectRef({ name: ..., description: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createProjectRef(dataConnect, createProjectVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.project_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.project_insert);
});
```

## CreateTestSuite
You can execute the `CreateTestSuite` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createTestSuite(vars: CreateTestSuiteVariables): MutationPromise<CreateTestSuiteData, CreateTestSuiteVariables>;

interface CreateTestSuiteRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateTestSuiteVariables): MutationRef<CreateTestSuiteData, CreateTestSuiteVariables>;
}
export const createTestSuiteRef: CreateTestSuiteRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createTestSuite(dc: DataConnect, vars: CreateTestSuiteVariables): MutationPromise<CreateTestSuiteData, CreateTestSuiteVariables>;

interface CreateTestSuiteRef {
  ...
  (dc: DataConnect, vars: CreateTestSuiteVariables): MutationRef<CreateTestSuiteData, CreateTestSuiteVariables>;
}
export const createTestSuiteRef: CreateTestSuiteRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createTestSuiteRef:
```typescript
const name = createTestSuiteRef.operationName;
console.log(name);
```

### Variables
The `CreateTestSuite` mutation requires an argument of type `CreateTestSuiteVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateTestSuiteVariables {
  name: string;
  projectId: UUIDString;
}
```
### Return Type
Recall that executing the `CreateTestSuite` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateTestSuiteData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateTestSuiteData {
  testSuite_insert: TestSuite_Key;
}
```
### Using `CreateTestSuite`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createTestSuite, CreateTestSuiteVariables } from '@dataconnect/generated';

// The `CreateTestSuite` mutation requires an argument of type `CreateTestSuiteVariables`:
const createTestSuiteVars: CreateTestSuiteVariables = {
  name: ..., 
  projectId: ..., 
};

// Call the `createTestSuite()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createTestSuite(createTestSuiteVars);
// Variables can be defined inline as well.
const { data } = await createTestSuite({ name: ..., projectId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createTestSuite(dataConnect, createTestSuiteVars);

console.log(data.testSuite_insert);

// Or, you can use the `Promise` API.
createTestSuite(createTestSuiteVars).then((response) => {
  const data = response.data;
  console.log(data.testSuite_insert);
});
```

### Using `CreateTestSuite`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createTestSuiteRef, CreateTestSuiteVariables } from '@dataconnect/generated';

// The `CreateTestSuite` mutation requires an argument of type `CreateTestSuiteVariables`:
const createTestSuiteVars: CreateTestSuiteVariables = {
  name: ..., 
  projectId: ..., 
};

// Call the `createTestSuiteRef()` function to get a reference to the mutation.
const ref = createTestSuiteRef(createTestSuiteVars);
// Variables can be defined inline as well.
const ref = createTestSuiteRef({ name: ..., projectId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createTestSuiteRef(dataConnect, createTestSuiteVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.testSuite_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.testSuite_insert);
});
```

## LogTestExecution
You can execute the `LogTestExecution` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
logTestExecution(vars: LogTestExecutionVariables): MutationPromise<LogTestExecutionData, LogTestExecutionVariables>;

interface LogTestExecutionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: LogTestExecutionVariables): MutationRef<LogTestExecutionData, LogTestExecutionVariables>;
}
export const logTestExecutionRef: LogTestExecutionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
logTestExecution(dc: DataConnect, vars: LogTestExecutionVariables): MutationPromise<LogTestExecutionData, LogTestExecutionVariables>;

interface LogTestExecutionRef {
  ...
  (dc: DataConnect, vars: LogTestExecutionVariables): MutationRef<LogTestExecutionData, LogTestExecutionVariables>;
}
export const logTestExecutionRef: LogTestExecutionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the logTestExecutionRef:
```typescript
const name = logTestExecutionRef.operationName;
console.log(name);
```

### Variables
The `LogTestExecution` mutation requires an argument of type `LogTestExecutionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface LogTestExecutionVariables {
  status: string;
  notes?: string | null;
  testCaseId: UUIDString;
}
```
### Return Type
Recall that executing the `LogTestExecution` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `LogTestExecutionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface LogTestExecutionData {
  testExecution_insert: TestExecution_Key;
}
```
### Using `LogTestExecution`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, logTestExecution, LogTestExecutionVariables } from '@dataconnect/generated';

// The `LogTestExecution` mutation requires an argument of type `LogTestExecutionVariables`:
const logTestExecutionVars: LogTestExecutionVariables = {
  status: ..., 
  notes: ..., // optional
  testCaseId: ..., 
};

// Call the `logTestExecution()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await logTestExecution(logTestExecutionVars);
// Variables can be defined inline as well.
const { data } = await logTestExecution({ status: ..., notes: ..., testCaseId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await logTestExecution(dataConnect, logTestExecutionVars);

console.log(data.testExecution_insert);

// Or, you can use the `Promise` API.
logTestExecution(logTestExecutionVars).then((response) => {
  const data = response.data;
  console.log(data.testExecution_insert);
});
```

### Using `LogTestExecution`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, logTestExecutionRef, LogTestExecutionVariables } from '@dataconnect/generated';

// The `LogTestExecution` mutation requires an argument of type `LogTestExecutionVariables`:
const logTestExecutionVars: LogTestExecutionVariables = {
  status: ..., 
  notes: ..., // optional
  testCaseId: ..., 
};

// Call the `logTestExecutionRef()` function to get a reference to the mutation.
const ref = logTestExecutionRef(logTestExecutionVars);
// Variables can be defined inline as well.
const ref = logTestExecutionRef({ status: ..., notes: ..., testCaseId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = logTestExecutionRef(dataConnect, logTestExecutionVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.testExecution_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.testExecution_insert);
});
```

