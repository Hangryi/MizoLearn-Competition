import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  SystemChrome.setSystemUIOverlayStyle(const SystemUiOverlayStyle(
    statusBarColor: Color(0xFFFAF6F0),
    statusBarIconBrightness: Brightness.dark,
    systemNavigationBarColor: Color(0xFFFFFDF9),
    systemNavigationBarIconBrightness: Brightness.dark,
  ));
  runApp(const MizoLearnApp());
}

class MizoLearnApp extends StatelessWidget {
  const MizoLearnApp({super.key});

  @override
  Widget build(BuildContext context) => const MaterialApp(
        debugShowCheckedModeBanner: false,
        title: 'MizoLearn',
        home: LearningWebView(),
      );
}

class LearningWebView extends StatelessWidget {
  const LearningWebView({super.key});

  @override
  Widget build(BuildContext context) => const Scaffold(
        backgroundColor: Color(0xFFFAF6F0),
        body: SafeArea(
          bottom: false,
          child: AndroidView(viewType: 'mizolearn/offline_web_app'),
        ),
      );
}
