export type ProviderMessage = {
  role: 'system' | 'user' | 'assistant';
  content: string;
};

export interface AIProvider {
  complete(messages: ProviderMessage[]): Promise<string>;
}
