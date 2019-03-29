import { Observable } from 'tns-core-modules/data/observable';
import { TodayExtensionPlugin } from 'nativescript-today-extension-plugin';

export class HelloWorldModel extends Observable {
  public message: string;
  private todayExtensionPlugin: TodayExtensionPlugin;

  constructor() {
    super();

    this.todayExtensionPlugin = new TodayExtensionPlugin();
    this.message = this.todayExtensionPlugin.message;
  }
}
