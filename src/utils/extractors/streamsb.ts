import { VideoExtractor, IVideo } from '../../models';

class StreamSB extends VideoExtractor {
  protected override serverName = 'streamsb';
  protected override sources: IVideo[] = [];

  //TODO: implement functions
  override extract(videoUrl: string): Promise<IVideo[]> {
    throw new Error('Method not implemented.');
  }
}

export default StreamSB;