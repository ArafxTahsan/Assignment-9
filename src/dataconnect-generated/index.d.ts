import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface Bug_Key {
  id: UUIDString;
  __typename?: 'Bug_Key';
}

export interface CreateProjectData {
  project_insert: Project_Key;
}

export interface CreateProjectVariables {
  name: string;
  description?: string | null;
}

export interface CreateTestSuiteData {
  testSuite_insert: TestSuite_Key;
}

export interface CreateTestSuiteVariables {
  name: string;
  projectId: UUIDString;
}

export interface ListTestCasesBySuiteData {
  testCases: ({
    id: UUIDString;
    title: string;
    steps: string;
    expectedResult: string;
  } & TestCase_Key)[];
}

export interface ListTestCasesBySuiteVariables {
  suiteId: UUIDString;
}

export interface LogTestExecutionData {
  testExecution_insert: TestExecution_Key;
}

export interface LogTestExecutionVariables {
  status: string;
  notes?: string | null;
  testCaseId: UUIDString;
}

export interface Project_Key {
  id: UUIDString;
  __typename?: 'Project_Key';
}

export interface TestCase_Key {
  id: UUIDString;
  __typename?: 'TestCase_Key';
}

export interface TestExecution_Key {
  id: UUIDString;
  __typename?: 'TestExecution_Key';
}

export interface TestSuite_Key {
  id: UUIDString;
  __typename?: 'TestSuite_Key';
}

interface CreateProjectRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateProjectVariables): MutationRef<CreateProjectData, CreateProjectVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateProjectVariables): MutationRef<CreateProjectData, CreateProjectVariables>;
  operationName: string;
}
export const createProjectRef: CreateProjectRef;

export function createProject(vars: CreateProjectVariables): MutationPromise<CreateProjectData, CreateProjectVariables>;
export function createProject(dc: DataConnect, vars: CreateProjectVariables): MutationPromise<CreateProjectData, CreateProjectVariables>;

interface CreateTestSuiteRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateTestSuiteVariables): MutationRef<CreateTestSuiteData, CreateTestSuiteVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateTestSuiteVariables): MutationRef<CreateTestSuiteData, CreateTestSuiteVariables>;
  operationName: string;
}
export const createTestSuiteRef: CreateTestSuiteRef;

export function createTestSuite(vars: CreateTestSuiteVariables): MutationPromise<CreateTestSuiteData, CreateTestSuiteVariables>;
export function createTestSuite(dc: DataConnect, vars: CreateTestSuiteVariables): MutationPromise<CreateTestSuiteData, CreateTestSuiteVariables>;

interface ListTestCasesBySuiteRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListTestCasesBySuiteVariables): QueryRef<ListTestCasesBySuiteData, ListTestCasesBySuiteVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListTestCasesBySuiteVariables): QueryRef<ListTestCasesBySuiteData, ListTestCasesBySuiteVariables>;
  operationName: string;
}
export const listTestCasesBySuiteRef: ListTestCasesBySuiteRef;

export function listTestCasesBySuite(vars: ListTestCasesBySuiteVariables, options?: ExecuteQueryOptions): QueryPromise<ListTestCasesBySuiteData, ListTestCasesBySuiteVariables>;
export function listTestCasesBySuite(dc: DataConnect, vars: ListTestCasesBySuiteVariables, options?: ExecuteQueryOptions): QueryPromise<ListTestCasesBySuiteData, ListTestCasesBySuiteVariables>;

interface LogTestExecutionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: LogTestExecutionVariables): MutationRef<LogTestExecutionData, LogTestExecutionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: LogTestExecutionVariables): MutationRef<LogTestExecutionData, LogTestExecutionVariables>;
  operationName: string;
}
export const logTestExecutionRef: LogTestExecutionRef;

export function logTestExecution(vars: LogTestExecutionVariables): MutationPromise<LogTestExecutionData, LogTestExecutionVariables>;
export function logTestExecution(dc: DataConnect, vars: LogTestExecutionVariables): MutationPromise<LogTestExecutionData, LogTestExecutionVariables>;

