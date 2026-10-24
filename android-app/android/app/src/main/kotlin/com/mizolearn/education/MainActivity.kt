package com.mizolearn.education

import android.content.Context
import android.graphics.Color
import android.net.Uri
import android.webkit.MimeTypeMap
import android.webkit.WebChromeClient
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebViewClient
import android.view.View
import io.flutter.embedding.android.FlutterActivity
import io.flutter.embedding.engine.FlutterEngine
import io.flutter.plugin.common.StandardMessageCodec
import io.flutter.plugin.platform.PlatformView
import io.flutter.plugin.platform.PlatformViewFactory

class MainActivity : FlutterActivity() {
    override fun configureFlutterEngine(flutterEngine: FlutterEngine) {
        super.configureFlutterEngine(flutterEngine)
        flutterEngine.platformViewsController.registry.registerViewFactory(
            "mizolearn/offline_web_app",
            LocalLearningViewFactory(this),
        )
    }
}

private class LocalLearningViewFactory(private val context: Context) :
    PlatformViewFactory(StandardMessageCodec.INSTANCE) {
    override fun create(context: Context, viewId: Int, args: Any?): PlatformView =
        LocalLearningView(this.context)
}

private class LocalLearningView(context: Context) : PlatformView {
    private val webView = WebView(context).apply {
        setBackgroundColor(Color.rgb(250, 246, 240))
        settings.javaScriptEnabled = true
        settings.domStorageEnabled = true
        settings.databaseEnabled = true
        settings.cacheMode = WebSettings.LOAD_DEFAULT
        settings.allowFileAccess = false
        settings.allowContentAccess = false
        webViewClient = object : WebViewClient() {
            override fun shouldInterceptRequest(
                view: WebView,
                request: WebResourceRequest,
            ): WebResourceResponse? {
                val uri: Uri = request.url
                if (uri.host != "appassets.androidplatform.net" ||
                    uri.path?.startsWith("/assets/") != true
                ) return super.shouldInterceptRequest(view, request)

                val assetPath = uri.path!!.removePrefix("/assets/")
                if (assetPath.contains("..")) {
                    return WebResourceResponse("text/plain", "utf-8", 404, "Not found", emptyMap(), null)
                }
                return try {
                    val extension = MimeTypeMap.getFileExtensionFromUrl(assetPath)
                    val mimeType = MimeTypeMap.getSingleton().getMimeTypeFromExtension(extension)
                        ?: "application/octet-stream"
                    WebResourceResponse(mimeType, "utf-8", context.assets.open(assetPath))
                } catch (_: Exception) {
                    WebResourceResponse("text/plain", "utf-8", 404, "Not found", emptyMap(), null)
                }
            }
        }
        webChromeClient = WebChromeClient()
        loadUrl("https://appassets.androidplatform.net/assets/web/index.html")
    }

    override fun getView(): View = webView

    override fun dispose() {
        webView.stopLoading()
        webView.destroy()
    }
}
