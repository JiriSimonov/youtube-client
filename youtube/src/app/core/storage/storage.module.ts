import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WINDOW } from './tokens/window.token';
import { STORAGE_KEY_PREFIX } from './tokens/storage-key.token';
import { StorageModuleConfig } from './models/storage-module-config.model';

@NgModule({
  imports: [CommonModule],
})
export class StorageModule {
  public static forRoot({ config }: { config: StorageModuleConfig }): ModuleWithProviders<StorageModule> {
    return {
      ngModule: StorageModule,
      providers: [
        {
          provide: WINDOW,
          useFactory: () => window,
        },
        {
          provide: STORAGE_KEY_PREFIX,
          useValue: config.prefix || '',
        },
      ],
    };
  }
}
