# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createProject, createTestSuite, listTestCasesBySuite, logTestExecution } from '@dataconnect/generated';


// Operation CreateProject:  For variables, look at type CreateProjectVars in ../index.d.ts
const { data } = await CreateProject(dataConnect, createProjectVars);

// Operation CreateTestSuite:  For variables, look at type CreateTestSuiteVars in ../index.d.ts
const { data } = await CreateTestSuite(dataConnect, createTestSuiteVars);

// Operation ListTestCasesBySuite:  For variables, look at type ListTestCasesBySuiteVars in ../index.d.ts
const { data } = await ListTestCasesBySuite(dataConnect, listTestCasesBySuiteVars);

// Operation LogTestExecution:  For variables, look at type LogTestExecutionVars in ../index.d.ts
const { data } = await LogTestExecution(dataConnect, logTestExecutionVars);


```