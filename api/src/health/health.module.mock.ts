import { Module } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { HealthController } from './health.controller';
import { ModuleMetadata } from '@nestjs/common/interfaces';

const healthModuleMeta: ModuleMetadata = {
  controllers: [HealthController],
};

export function mockHealthModule(): Promise<TestingModule> {
  return Test.createTestingModule(healthModuleMeta).compile();
}

@Module(healthModuleMeta)
export class HealthModuleMock {}
